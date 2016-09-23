'use strict';

const Server = require('karma').Server;

module.exports = function() {
    console.time('test');
    return new Promise((resolve,reject) => {
        const server = new Server({configFile: process.cwd() + '/config/karma.conf.js'}, (exitCode) => {

        });
        server.on('run_complete', (browser) => {
            console.timeEnd('test');
            resolve(browser);
        });
        server.on('browser_error', (browser,err) => {
            reject(err);
        });
        server.start();
    });
};
