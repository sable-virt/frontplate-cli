#!/usr/bin/env node
'use strict';
const program = require('commander');
const pkg = require('../package.json');

program._name = 'frp';
program
    .version(pkg.version)
    .description('Front-end task runner CLI for front-end developers')
    .usage('<command> [name] [options]')
    .option('-c, --config [path]', 'config file path')
    .command('create <name> [options]','Create project')
    .command('init','Create config files')
    .command('build [options]','Execute build tasks')
    .command('serve [options]','Start server & watch tasks');
program.parse(process.argv);