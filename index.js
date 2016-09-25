#!/usr/bin/env node
'use strict';
const util = require('./lib/util');
const spawn = require('cross-spawn');

const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
updateNotifier({pkg}).notify();

const localScript = util.getLocalScript();
const localConf = util.getLocalConfig();
let argv = process.argv;
argv[1] = localScript;
argv.push('-c',localConf);

spawn(argv.shift(), argv, {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit'
}).on('exit', () => {
});