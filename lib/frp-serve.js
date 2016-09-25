#!/usr/bin/env node
'use strict';

const path = require('path');
const program = require('commander');
const gaze = require('gaze');
const chalk = require('chalk');
const t = require('./tasks');
const util = require('./util');

if (!util.existsConfig()) {
    console.log(chalk.red('Not found "frp.config.js". Please execute "frp init" command.'));
    process.exit(1);
}

program._name = 'frp serve';
program
    .option('-c, --config [path]', 'config file path')
    .parse(process.argv);

const config = require(program.config || '../frp.config')(program.production || false);
const browser = t.server(config.server);

gaze(config.style.src, (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        t.style(config.style.src, config.style.dest, config.style.plugins).subscribe((css) => {
            css = util.flatten(css).filter((filepath) => {
                return (path.extname(filepath) !== '.map')
            });
            browser.reload(css);
        });
    });
});
gaze(config.html.src, (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        t.html(config.html.src, config.html.dest, config.html.params).subscribe((files) => {
            browser.reload(files);
        });
    });
});

gaze(config.image.src, (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        t.image(config.image.src, config.image.dest, config.image.params).subscribe((images) => {
            // （ファイルパスだと）cssのイメージが更新されなくなってしまう
            browser.reload();
        });
    });
});

config.sprite.forEach((sp) => {
    gaze(sp.src, (err, watcher) => {
        watcher.on('all', (event, filepath) => {
            t.sprite([sp], {});
        });
    });
});

t.copy(config.copy,{watch:true,initialCopy:false}).subscribe((res) => {
    browser.reload(res);
});

config.script.watch = true;
t.script(config.script).subscribe((res) => {
    browser.reload();
});