'use strict';

const Rx = require('rxjs');
const chalk = require('chalk');
const timer = require('../util/timer');
const t = require('../tasks');
const util = require('../util/util');
const coreUtil = require('util');

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
exports.handler = function (argv) {
  const config = util.getConfig(argv);
  try {
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
    }).subscribe(() => {
      timer.output();
      console.log(chalk.green('Succeeded'));
      process.exit(0);
    }, (e) => {
      if (e) {
        if (e.formatted) {
          console.log('\n', chalk.red(e.formatted));
        } else {
          console.error('\n', chalk.red(coreUtil.inspect(e)));
        }
      }
      process.exit(1);
    });
  } catch (e) {
    if (e) {
      if (e.formatted) {
        console.log('\n', chalk.red(e.formatted));
      } else {
        console.error('\n', chalk.red(coreUtil.inspect(e)));
      }
    }
    process.exit(1);
  }
};