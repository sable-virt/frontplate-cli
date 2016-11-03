'use strict';

const Rx = require('rxjs');
const chalk = require('chalk');
const timer = require('../util/timer');
const t = require('../tasks');
const util = require('../util/util');

exports.command = 'build';
exports.desc = 'Execute build tasks';
exports.builder = {
    production: {
        alias: 'p',
        default: false,
        describe: 'production mode',
        type: 'boolean',
        global: true
    },
};
exports.aliases = [];
exports.handler = function(argv) {
    const config = util.getConfig(argv);
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
};