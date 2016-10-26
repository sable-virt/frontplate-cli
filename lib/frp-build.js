#!/usr/bin/env node
'use strict';

const Rx = require('rxjs');
const path = require('path');
const chalk = require('chalk');
const program = require('commander');
const timer = require('./timer');
const t = require('./tasks');
const util = require('./util');

program._name = 'frp build';
program
    .option('-c, --config <path>', 'config file path')
    .option('-p, --production', 'Build files for production')
    .parse(process.argv);

const config = util.getConfig(program);

t.clean(config.clean)
    .flatMap(() => {
        return Rx.Observable.combineLatest(
            t.copy(config.copy),
            t.sprite(config.sprite),
            t.html(config.html)
        );
    }).flatMap(() => {
        return Rx.Observable.combineLatest(
            t.script(config.script),
            t.style(config.style)
        );
    }).flatMap(() => {
        return t.test(config.test);
    }).subscribe(() => {
        timer.output();
        console.log(chalk.green('Succeeded'));
        process.exit(0);
    }, (e) => {
        process.exit(1);
        throw new Error(e);
    });