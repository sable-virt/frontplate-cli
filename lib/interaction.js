#!/usr/bin/env node
'use strict';
const inquirer = require('inquirer');
const glob = require('glob');
const path = require('path');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const COMMANDS = [
  'serve',
  'build',
  'create',
  'task',
  'test'
];
const TASKS = [
  'script',
  'style',
  'html',
  'test',
  'copy',
  'sprite',
  'clean',
  'server'
];
const PRESET = [
  'default',
  'wp'
];
module.exports = function (argv) {
  const CONFIGS = glob.sync('frp*.js');
  inquirer.prompt([{
    name: 'command',
    message: 'choose execute command',
    type: 'list',
    choices: COMMANDS
  }, {
    name: 'config',
    message: 'choose config file',
    type: 'list',
    choices: CONFIGS,
    when(args) {
      if (CONFIGS.length === 0) return false;
      if (CONFIGS.length === 1) {
        args.config = CONFIGS[0];
        return false;
      }
      return true;
    }
  }, {
    name: 'task',
    message: 'choose execute task?',
    type: 'list',
    choices: TASKS,
    when(args) {
      return (args.command === 'task');
    }
  }, {
    name: 'appname',
    message: 'input project name',
    type: 'input',
    when(args) {
      return (args.command === 'create');
    },
    validate(val) {
      if (val) {
        return true;
      }
      return false;
    }
  }, {
    name: 'preset',
    message: 'choose preset template.',
    type: 'list',
    choices: PRESET,
    when(args) {
      return (args.command === 'create');
    }
  }, {
    name: 'test',
    message: 'watch unit testing?',
    type: 'confirm',
    default: false,
    when(args) {
      return (args.command === 'serve');
    }
  }, {
    name: 'production',
    message: 'use production build?',
    type: 'confirm',
    default: false,
    when(args) {
      return (args.command !== 'create');
    }
  }]).then((answers) => {
    let params = [
      path.join(__dirname, '../index.js'),
      answers.command
    ];
    if (answers.task) {
      params.push(answers.task);
    }
    if (answers.appname) {
      params.push(answers.appname);
    }
    if (answers.config) {
      params.push('-c', answers.config);
    }
    if (answers.preset) {
      params.push('--preset', answers.preset);
    }
    if (answers.test) {
      params.push('-t')
    }
    if (answers.production) {
      params.push('-p');
    }
    console.log(chalk.blue(`frp ${params.slice(1).join(' ')}`));
    spawn('node', params, {
      cwd: process.cwd(),
      env: process.env,
      stdio: 'inherit'
    }).on('exit', (code) => {
      process.exit(code);
    });
  });
};