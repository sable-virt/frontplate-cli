#!/usr/bin/env node
'use strict';

const Rx = require('rxjs');
const path = require('path');
const chalk = require('chalk');
const program = require('commander');
const timer = require('./timer');
const t = require('./tasks');
const util = require('./util');

if (!util.existsConfig()) {
    console.log(chalk.red('Not found "frp.config.js". Please execute "frp init" command.'));
    process.exit(1);
}

program._name = 'frp build';
program
    .option('-c, --config [path]', 'config file path')
    .option('-p, --production', 'Build files for production')
    .parse(process.argv);

const config = require(program.config || '../frp.config')(program.production || false);

t.clean(config.clean.src)
    .flatMap(() => {
        return Rx.Observable.combineLatest(
            t.copy(config.copy),
            t.sprite(config.sprite, {}),
            t.html(config.html.src, config.html.dest, config.html.params)
        );
    }).flatMap(() => {
        return Rx.Observable.combineLatest(
            t.script(config.script),
            t.image(config.image.src, config.image.dest, config.image.params),
            t.style(config.style.src, config.style.dest, config.style.plugins)
        );
    // }).flatMap(() => {
    //     return t.test(config.test);
    }).subscribe(() => {
        timer.output();
        console.log(chalk.green('Succeeded'));
        process.exit(0);
    }, (e) => {
        throw new Error(e);
        process.exit(1);
    });