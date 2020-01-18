const Git = require("nodegit");
const appRoot = require('app-root-path');

const push_block = (fileName) => {
    Git.Repository.open(appRoot + 'gitchain')
        .then()
};
