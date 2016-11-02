'use strict';

const fs = require('fs-extra');
const path = require('path');
const cpx = require('cpx');
const chalk = require('chalk');
const util = require('../util/util');
const CWD = process.cwd();
const install = require('../util/install');
const pkg = require('../../package.json');
const TEMPLATE_FILES = [
    'frp.config.js',
    '.eslintrc',
    '.sass-lint.yml'
];

exports.command = 'init';
exports.desc = 'Create config files';
exports.builder = {
    yarn: {
        default: false,
        alias: 'y',
        describe: 'Use "yarn install" instead of "npm install"',
        type: 'boolean'
    }
};
exports.aliases = [];
exports.handler = function (argv) {
    TEMPLATE_FILES.forEach((filename) => {
        let filepath = path.join(CWD, filename);
        if (!util.exists(filepath)) {
            let dest = path.dirname(filepath);
            let target = path.join(__dirname, '../../templates', filename);
            console.log(chalk.green.bold('[create]'), filepath);
            cpx.copySync(target, dest);
        }
    });

    let versionFile = path.join(CWD, '.version');
    fs.outputFileSync(versionFile, pkg.version,{},(err) => {
        if (err) throw new Error(err);
    });
    install(CWD,argv.yarn || false).subscribe(() => {
        // done
    });
};