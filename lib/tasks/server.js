'use strict';
const BrowserSync = require('browser-sync');

/**
 * server tasks
 * @param config{object} BrowserSync options(https://www.npmjs.com/package/browser-sync)
 * @returns {BrowserSync.Browser}
 */
module.exports = function(config) {
    const browser = BrowserSync.create();
    browser.init(config);
    return browser;
};