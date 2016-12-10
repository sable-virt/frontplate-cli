'use strict';

const Rx = require('rxjs');
const chalk = require('chalk');
const timer = require('../util/timer');
const t = require('../tasks');
const util = require('../util/util');

exports.command = 'test';
exports.desc = 'Execute unit testing';
exports.builder = {
    production: {
        alias: 'p',
        default: false,
        describe: 'production mode',
        type: 'boolean',
        global: true
    }
};
exports.aliases = [];
exports.handler = function(argv) {
    const config = util.getConfig(argv);
    t.test(config.test).subscribe(() => {
        timer.output();
        console.log(chalk.green('Succeeded'));
        process.exit(0);
    }, (e) => {
        process.exit(1);
        console.error(chalk.red(e));
        throw new Error('BUILD ERROR');
    });
};