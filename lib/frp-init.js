#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const program = require('commander');
const path = require('path');
const cpx = require('cpx');
const chalk = require('chalk');
const util = require('./util');
const CWD = process.cwd();
const clipkg = require('../package.json');
const install = require('./install');

program._name = 'frp init';
program
    .usage('<name>')
    .option('-c, --config <path>', 'config file path')
    .parse(process.argv);

const DEFAULT_FILES = [
    'frp.config.js',
    '.babelrc',
    '.eslintrc',
    '.sass-lint.yml'
];

// let pkgpath = path.join(CWD, 'package.json');
// if (!util.exists(pkgpath)) {
//     console.log(chalk.red('Not found "package.json"'));
//     process.exit(1);
// }
//
// let pkg = require(pkgpath);
// if (!pkg.devDependencies) {
//     pkg.devDependencies = {};
// }
// if (!pkg.devDependencies['frontplate-cli']) {
//     pkg.devDependencies['frontplate-cli'] = `^${clipkg.version}`;
//     fs.outputFileSync(pkgpath,JSON.stringify(pkg));
//     install(CWD).then(() => {
//
//     }, (e) => {
//         throw new Error(e);
//     });
// }

let files = fs.readdirSync(path.join(__dirname, '../config'));
files = files.map((file) => {
    return `config/${file}`;
}).concat(DEFAULT_FILES);

files.forEach((filename) => {
    let filepath = path.join(CWD, filename);
    if (!util.exists(filepath)) {
        let dest = path.dirname(filepath);
        let target = path.join(__dirname, '../', filename);
        console.log(chalk.green.bold('[create]'), filepath);
        cpx.copySync(target, dest);
    }
});