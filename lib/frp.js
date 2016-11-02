#!/usr/bin/env node
'use strict';
const path = require('path');
const yargs = require("yargs");

const argv = yargs.usage('frp <command> [options]')
    .commandDir('cmds')
    .demand(1)
    .options({
        config: {
            alias: 'c',
            default: null,
            describe: 'config file path',
            type: 'string',
            global: true
        }
    })
    .version()
    .help('help')
    .alias('help', 'h')
    .alias('version', 'v')
    .argv;