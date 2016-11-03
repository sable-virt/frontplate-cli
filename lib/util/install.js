'use strict';
const Rx = require('rxjs');
const spawn = require('cross-spawn');

/**
 * npm startコマンドを実行
 */
function npmInstall(dir,useYarn,packageNames) {
    return Rx.Observable.create((observer) => {
        let command = 'npm';
        if (useYarn) {
            command = 'yarn';
        }
        let params = ['install'];
        if (packageNames) {
            params = params.concat(packageNames);
        }
        spawn(command,params,{
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