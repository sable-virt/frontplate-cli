#!/usr/bin/env node
'use strict';

const path = require('path');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const program = require('commander');
const ora = require('ora');
const download = require('download-github-repo');
const install = require('./install');
program._name = 'frp create';
program
    .usage('<name> [options]')
    .option('-p, --preset', 'Preset template')
    .option('-g, --github', 'Template github repository')
    .parse(process.argv);

let appName = program.args[0]
if (!appName) {
    throw new Error('app name required');
}

const destPath = path.join(process.cwd(),appName);
mkdirp.sync(destPath);
const spinner = ora('[download]').start();
download('frontainer/frontplate',destPath,(e) => {
    if (e) {
        console.error(e);
        spinner.fail();
        process.exit(1);
    }
    spinner.succeed();
    install(destPath).then(() => {
        console.log(chalk.green(`Succeeded creating project!`));
        process.exit(0);
    },(e) => {
        console.log(chalk.red(`Error creating project...`));
        process.exit(1);
    });
});