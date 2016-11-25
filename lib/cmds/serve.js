'use strict';

const path = require('path');
const gaze = require('gaze');
const chalk = require('chalk');
const t = require('../tasks');
const util = require('../util/util');

let browser;
let config;
let watches = [];

exports.command = 'serve';
exports.desc = 'Start server & watch tasks';
exports.builder = {
    production: {
        alias: 'p',
        default: false,
        describe: 'production mode',
        type: 'boolean',
        global: true
    },
    test: {
        alias: 't',
        default: false,
        describe: 'Unit test watching',
        type: 'boolean'
    }
};
exports.aliases = [];
exports.handler = function (argv) {
    config = util.getConfig(argv);
    if (config.server.proxy) {
        delete config.server.server;
    }
    browser = t.server(config.server);

    gaze(config.style.src, (err, watcher) => {
        watcher.on('all', (event, filepath) => {
            t.style(config.style).subscribe((css) => {
                css = util.flatten(css).filter((filepath) => {
                    return (path.extname(filepath) !== '.map')
                });
                browser.reload(css);
            }, () => {
                // on error
            });
        });
        watches.push(watcher);
    });
    gaze(config.html.src, (err, watcher) => {
        watcher.on('all', (event, filepath) => {
            t.html(config.html).subscribe((files) => {
                browser.reload(files);
            }, () => {
                // on error
            });
        });
        watches.push(watcher);
    });

    config.sprite.forEach((sp) => {
        gaze(sp.src, (err, watcher) => {
            watcher.on('all', (event, filepath) => {
                t.sprite([sp]).subscribe(() => {
                }, () => {
                    // on error
                });
            });
            watches.push(watcher);
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

    if (argv.test) {
        t.test(config.test, true).subscribe((res) => {
            //
        }, () => {
            // on error
        });
    }
};

process.on('exit',(code) => {
    // 監視停止処理
    watches.forEach((watcher) => {
        watcher.close();
    });
    watches = [];
    // ブラウザ停止
    browser.exit();
});