'use strict';
const spawn = require('cross-spawn');
const chalk = require('chalk');

/**
 * npm startコマンドを実行
 */
function npmInstall(dir) {
    return new Promise((resolve,reject) => {
        spawn('npm',[
            'install'
        ],{
            cwd:dir,
            stdio: 'inherit'
        }).on('exit',(code,signal) => {
            if (code === 0) {
                resolve(code, signal);
            } else {
                reject(code,signal)
            }
        });
    });
}
module.exports = npmInstall;