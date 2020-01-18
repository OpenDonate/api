const Git = require('simple-git')()
const fs = require('./file_modifier');
const { exec } = require("child_process");
const appRoot = require('app-root-path');
const process = require('process');

const chain_url = "https://github.com/OpenDonate/gitchain.git";

const push_block = async (fileName) => {
    try {
        await Git.clone(chain_url);
    } catch (error) {
        console.error(error);
    }
    process.chdir(appRoot + "/gitchain")
    fs.copy_file(appRoot + '/' + fileName, process.cwd() + '/' +  fileName);
    Git.add(fileName)
        .commit("Adding Block")
        .push('origin','master')
    exec('cd .. && rm -rf gitchain', (error, stdout, stderr) => { console.log(stdout) });
};

module.exports = {
    push_block
};