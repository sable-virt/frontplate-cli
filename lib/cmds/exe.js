'use strict';

const path = require('path');
const chalk = require('chalk');
const timer = require('../util/timer');
const util = require('../util/util');
const coreUtil = require('util');

exports.command = 'exe';
exports.desc = 'Execute task from script file';
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
  if (argv._.length < 1) {
    throw new Error('frp exe <SCRIPT_FILE> [OPTIONS]');
  }
  let script = require(path.join(process.cwd(), argv._[1]));
  script(argv, config).subscribe(() => {

  }, (e) => {
    console.error('\n',chalk.red(coreUtil.inspect(e)));
    throw new Error('FRP EXE ERROR');
  });
};