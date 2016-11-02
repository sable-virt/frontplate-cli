'use strict';

const Rx = require('rxjs');
const Server = require('karma').Server;
const timer = require('../util/timer');

/**
 * test task
 * @param config{Function} karma config function
 * @returns {Rx.Observable}
 */
module.exports = function(config,watch) {
    timer.start('test');
    return Rx.Observable.create((observer) => {
        if (watch) {
            config.autoWatch = true;
            config.singleRun = false;
        }
        new Server(config)
            .on('run_complete', (browser,result) => {
                timer.end('test');
                if (result.error) {
                    observer.error(result.failed);
                } else {
                    setTimeout(() => {observer.next(browser)});
                }
            }).on('browser_error', (browser,err) => {
                timer.end('test');
                observer.error(err);
            }).start();
    });
};
