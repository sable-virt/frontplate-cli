'use strict';
const Rx = require('rxjs');
const spawn = require('cross-spawn');

/**
 * npm startコマンドを実行
 */
function npmInstall(dir) {
    return Rx.Observable.create((observer) => {
        spawn('npm',[
            'install'
        ],{
            cwd:dir,
            stdio: 'inherit'
        }).on('exit',(code,signal) => {
            if (code === 0) {
                observer.next(code);
            } else {
                observer.error(code);
            }
        });
    });
}
module.exports = npmInstall;