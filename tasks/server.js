'use strict';
const BrowserSync = require('browser-sync');
module.exports = function(config) {
    return new Promise((resolve,reject) => {
        const browser = BrowserSync.create();
        browser.init(config,() => {
            resolve(browser);
        });
    });
};