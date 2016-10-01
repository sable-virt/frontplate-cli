#!/usr/bin/env node
'use strict';

const path = require('path');
const program = require('commander');
const gaze = require('gaze');
const chalk = require('chalk');
const t = require('./tasks');
const util = require('./util');

program._name = 'frp serve';
program
    .option('-c, --config [path]', 'config file path')
    .option('-p, --production', 'Build files for production')
    .option('-t, --test', 'Unit test watching')
    .parse(process.argv);

const config = util.getConfig(program);
const browser = t.server(config.server);

gaze(config.style.src, (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        t.style(config).subscribe((css) => {
            css = util.flatten(css).filter((filepath) => {
                return (path.extname(filepath) !== '.map')
            });
            browser.reload(css);
        }, () => {
            // on error
        });
    });
});
gaze(config.html.src, (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        t.html(config.html).subscribe((files) => {
            browser.reload(files);
        }, () => {
            // on error
        });
    });
});

gaze(config.image.src, (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        t.image(config).subscribe((images) => {
            // （ファイルパスだと）cssのイメージが更新されなくなってしまう
            browser.reload();
        }, () => {
            // on error
        });
    });
});

config.sprite.forEach((sp) => {
    gaze(sp.src, (err, watcher) => {
        watcher.on('all', (event, filepath) => {
            t.sprite([sp]).subscribe(() => {
            }, () => {
                // on error
            });
        });
    });
});

t.copy(config.copy,{watch:true,initialCopy:false}).subscribe((res) => {
    browser.reload(res);
}, () => {
    // on error
});

config.script.watch = true;
t.script(config.script).subscribe((res) => {
    browser.reload();
}, () => {
    // on error
});

if (program.test) {
    t.test(config.test, true).subscribe((res) => {
        // 
    }, () => {
        // on error
    });
}