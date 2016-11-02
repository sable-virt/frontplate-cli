'use strict';
const Rx = require('rxjs');
const downloader = require('download-github-repo');
const ora = require('ora');

function download(template,destPath) {
    return Rx.Observable.create((observer) => {
        const spinner = ora(`[download] ${template}`).start();
        downloader(template,destPath,(e) => {
            if (e) {
                console.error(e);
                spinner.fail();
                observer.error(e);
                process.exit(1);
            }
            spinner.succeed();
            observer.next(destPath);
        });
    });
}

module.exports = download;