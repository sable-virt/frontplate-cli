'use strict';

const Rx = require('rxjs');
const path = require('path');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const ora = require('ora');
const download = require('../util/download');
const install = require('../util/install');
const util = require('../util/util');

exports.command = 'create <name>';
exports.desc = 'Create project';
exports.builder = {
    branch: {
        default: null,
        alias: 'b',
        describe: 'branch name',
        type: 'string'
    },
    preset: {
        default: 'default',
        alias: 'p',
        describe: 'preset template name',
        type: 'string'
    },
    github: {
        default: 'frontainer/frontplate',
        alias: 'g',
        describe: 'Template github repository',
        type: 'string'
    },
    yarn: {
        default: false,
        alias: 'y',
        describe: 'Use "yarn install" instead of "npm install"',
        type: 'string'
    }
};
exports.aliases = [];
exports.handler = function(argv) {
    const destPath = path.join(process.cwd(),argv.name);
    mkdirp.sync(destPath);
    let template = 'frontainer/frontplate';
    switch (argv.preset) {
        case 'wp':
            template = 'frontainer/wp-frontplate';
            break;
        default:
            break;
    }
    if (argv.github) {
        template = argv.github;
    }
    if (argv.branch) {
        template += '#' + argv.branch;
    }

    download(template,destPath)
        .flatMap(() => {
            return install(destPath,argv.yarn || false);
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
};