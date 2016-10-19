#!/usr/bin/env node
'use strict';

const Rx = require('rxjs');
const path = require('path');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const program = require('commander');
const ora = require('ora');
const download = require('./download');
const install = require('./install');
const util = require('./util');

program._name = 'frp create';
program
    .usage('<name> [options]')
    .option('-b, --branch <name>', 'branch name')
    .option('-p, --preset <name>', 'preset template name')
    .option('-c, --config <path>', 'config file path')
    .option('-g, --github <path>', 'Template github repository')
    .option('-y, --yarn', 'Use "yarn install" instead of "npm install"')
    .parse(process.argv);

let appName = program.args[0];
if (!appName) {
    throw new Error('app name required');
}

const destPath = path.join(process.cwd(),appName);
mkdirp.sync(destPath);
let template = 'frontainer/frontplate';
if (program.preset) {
    switch (program.preset) {
        case 'wp':
            template = 'frontainer/wp-frontplate';
            break;
        default:
            break;
    }
}
if (program.github) {
    template = program.github;
}
if (program.branch) {
    template += '#' + program.branch;
}

download(template,destPath)
    .flatMap(() => {
        return install(destPath,program.yarn || false);
    })
    .subscribe(() => {
        let pkg = require(path.join(destPath,'package.json'));
        if (pkg.frp) {
            Rx.Observable.pairs(pkg.frp).flatMap((v) => {
                return download(v[0],path.join(destPath,v[1]));
            }).subscribe(() => {
                console.log(chalk.green(`Succeeded creating project!`));
                process.exit(0);
            });
        } else {
            console.log(chalk.green(`Succeeded creating project!`));
            process.exit(0);
        }
    },(e) => {
        console.log(chalk.red(`Error creating project...`),e);
        process.exit(1);
    });