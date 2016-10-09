#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const program = require('commander');
const path = require('path');
const cpx = require('cpx');
const chalk = require('chalk');
const util = require('./util');
const CWD = process.cwd();
const install = require('./install');
const pkg = require('../package.json');

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

let versionFile = path.join(CWD, '.version');
fs.outputFileSync(versionFile, pkg.version,{},(err) => {
    if (err) throw new Error(err);
});