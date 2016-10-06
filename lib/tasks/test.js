'use strict';

const Rx = require('rxjs');
const Server = require('karma').Server;
const timer = require('../timer');
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
    update(key,value) {
        this._config[key] = value;
    }
}

/**
 * test task
 * @param config{Function} karma config function
 * @returns {Rx.Observable}
 */
module.exports = function(config,watch) {
    timer.start('test');
    return Rx.Observable.create((observer) => {
        let conf = new KarmaConfig();
        if (config) {
            config(conf);
        }
        if (watch) {
            conf.update('autoWatch',true);
            conf.update('singleRun',false);
        }
        new Server(conf.get())
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
