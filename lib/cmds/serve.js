'use strict';

const path = require('path');
const gaze = require('gaze');
const chalk = require('chalk');
const t = require('../tasks');
const util = require('../util/util');
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
    const config = util.getConfig(argv);
    if (config.server.proxy) {
        delete config.server.server;
    }
    const browser = t.server(config.server);

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

    if (argv.test) {
        t.test(config.test, true).subscribe((res) => {
            //
        }, () => {
            // on error
        });
    }
};