#!/usr/bin/env node
'use strict';
const path = require('path');
const spawn = require('cross-spawn');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
updateNotifier({
    pkg: pkg,
    defer: false
}).notify();

const localScript = path.join(__dirname, 'lib/frp.js');
let argv = process.argv;
let env = process.env;
let modulePath = [
    path.join(__dirname,'node_modules'),
    path.join(process.cwd(),'node_modules')
];
argv[1] = localScript;
env.NODE_PATH = modulePath.join(path.delimiter);
spawn(argv.shift(), argv, {
    cwd: process.cwd(),
    env: env,
    stdio: 'inherit'
}).on('exit', (code) => {
    process.exit(code);
});