const appRoot = require('app-root-path');
const Git = require('simple-git/promise')()
const fs = require('./file_modifier');
const { exec } = require("child_process");
const process = require('process');

const chain_url = "https://github.com/OpenDonate/gitchain.git";

const push_block = async (fileName) => {
    try {
        await Git.clone(chain_url);
        await process.chdir(appRoot + "/gitchain")
        await fs.copy_file(appRoot + '/' + fileName, process.cwd() + '/' +  fileName);
        console.log(process.cwd())
        await Git.add('gitchain')
        console.log("added")
        //await Git.commit("Adding Block")
        console.log("committed")
        //await Git.push('origin','master')

        //exec('cd .. && rm -rf gitchain', (error, stdout, stderr) => { console.log("removing repo") });
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    push_block
};