const appRoot = require('app-root-path');
const Git = require('simple-git/promise')();
const fs = require('./file_modifier');
const lanjiao = require('fs');
const { execSync } = require("child_process");
const process = require('process');
const crypto = require('crypto');

const chain_url = "https://github.com/OpenDonate/gitchain.git";

const getContentHash = (file_path) => {
    const content = lanjiao.readFileSync(file_path);
    return crypto.createHash('sha256').update(content, 'utf8').digest('hex');
};

const push_block = async (fileName) => {
    let fileHash = getContentHash(appRoot + '/' + fileName);
    try {
        await Git.clone(chain_url, 'gitchain');
        await process.chdir(appRoot + "/gitchain");
        await fs.copy_file(appRoot + '/' + fileName, process.cwd() + '/blocks/' + fileHash);
        await Git.cwd(appRoot + "/gitchain");
        await Git.add('.');
        console.log("added");
        await Git.commit("Adding Block");
        console.log("committed");
        await Git.push('origin','master');
        execSync('cd .. && rm -rf gitchain');
        console.log("removing repo");
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    push_block
};
