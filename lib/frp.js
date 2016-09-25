#!/usr/bin/env node
'use strict';
const program = require('commander');
const pkg = require('../package.json');

program._name = 'frp';
program
    .version(pkg.version)
    .description('run setup commands for all envs')
    .usage('<command> [name] [options]')
    .command('create <name> [options]','Create project')
    .command('build [options]','Build files')
    .command('serve [options]','serve');
program.parse(process.argv);