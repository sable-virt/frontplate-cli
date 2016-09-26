#!/usr/bin/env node
'use strict';
const path = require('path');
const spawn = require('cross-spawn');
const updateNotifier = require('update-notifier');
const util = require('./lib/util');
const pkg = require('./package.json');
updateNotifier({pkg}).notify();

const localScript = util.getLocalScript();
const localConf = util.getLocalConfig();
let argv = process.argv;
argv[1] = localScript;
argv.push('-c',localConf);
let env = process.env;
env.NODE_PATH = path.join(__dirname,'node_modules');
spawn(argv.shift(), argv, {
    cwd: process.cwd(),
    env: env,
    stdio: 'inherit'
}).on('exit', (code) => {
    process.exit(code);
});