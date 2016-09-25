'use strict';
const Rx = require('rxjs');
const cpx = require('cpx');
const ora = require('ora');
const timer = require('../lib/timer');

/**
 * copy
 * @param from{string}
 * @param to{string}
 * @param options{object}
 * @returns {Rx.Observable}
 */
function copy(from,to,options) {
    options = options || {};
    return Rx.Observable.create((observer) => {
        if (options.watch) {
            cpx.watch(from, to, options).on('copy',(e) => {
                observer.next(e.dstPath);
            });
        } else {
            cpx.copy(from, to, options, (e) => {
                if (e) return observer.error(e);
                observer.next({from:from,to:to});
            });
        }
    });
}

/**
 * copy task
 * @param data{object[]} 'from' and 'to' object
 * @param options{object} cpx options(https://www.npmjs.com/package/cpx)
 * @returns {Rx.Observable}
 */
module.exports = function(data,options) {
    timer.start('copy');
    options = options || {};
    const spinner = ora('[build] copy');
    if (!options.watch || options.initialCopy !== false) {
        spinner.start();
    }
    let observables = Object.keys(data).map((key,index) => {
        return copy(key,data[key],options);
    });
    let obs = Rx.Observable.combineLatest(observables).share();
    obs.subscribe(() => {
        spinner.succeed();
        timer.end('copy');
    },() => {
        spinner.fail();
    });
    return obs;
};