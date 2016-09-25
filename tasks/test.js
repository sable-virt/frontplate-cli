'use strict';

const Rx = require('rxjs');
const Server = require('karma').Server;
const timer = require('../lib/timer');

/**
 * Karma config clsss
 */
class KarmaConfig {
    constructor() {
        this._config = {};
    }
    set(obj) {
        this._config = obj;
    }
    get() {
        return this._config;
    }
}

/**
 * test task
 * @param config{Function} karma config function
 * @returns {Rx.Observable}
 */
module.exports = function(config) {
    timer.start('test');
    return Rx.Observable.create((observer) => {
        let conf = new KarmaConfig();
        config(conf);
        new Server(conf.get())
            .on('run_complete', (browser) => {
                timer.end('test');
                setTimeout(() => {observer.next(browser)});
            }).on('browser_error', (browser,err) => {
                observer.error(err);
            }).start();
    });
};
