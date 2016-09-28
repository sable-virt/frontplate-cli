#!/usr/bin/env node
'use strict';

const Rx = require('rxjs');
const path = require('path');
const chalk = require('chalk');
const program = require('commander');
const timer = require('./timer');
const t = require('./tasks');
const util = require('./util');

program._name = 'frp task <name> [options]';
program
    .option('-c, --config [path]', 'config file path')
    .option('-p, --production', 'Build files for production')
    .parse(process.argv);

const config = util.getConfig(program);

if (program.args.length === 0) {
    console.log(chalk.red('Require name:frp task <name> [options]'))
}
let tasks = [];
program.args.forEach((name) => {
    if (!t[name]) {
        return console.log(chalk.red(`Undefined task: ${name}`));
    }
    tasks.push(t[name](config[name]));
});
if (tasks.length > 0) {
    Rx.Observable.combineLatest(tasks).subscribe(() => {
        timer.output();
        console.log(chalk.green('Succeeded'));
        process.exit(0);
    }, (e) => {
        process.exit(1);
        throw new Error(e);
    });
}