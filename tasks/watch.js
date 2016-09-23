'use strict';
const gaze = require('gaze');
const html = require('./html');
const image = require('./image');
const script = require('./script');
const server = require('./server');
const sprite = require('./sprite');
const style = require('./style');
const test = require('./test');

let browser = server();
gaze('src/sass/**/*.scss', (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        style().then((css) => {
            browser.reload(css);
        });
    });
});
gaze('src/js/**/*.js', (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        script().then((files) => {
            console.log(files);
            browser.reload(files);
        });
    });
});

gaze('src/images/**/*', (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        image().then((images) => {
            // （ファイルパスだと）cssのイメージが更新されなくなってしまう
            browser.reload();
        });
    });
});

gaze('src/view/**/*.ejs', (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        html().then((htmlpath) => {
            browser.reload(htmlpath);
        });
    });
});

gaze('src/sprites/**/*', (err, watcher) => {
    watcher.on('all', (event, filepath) => {
        sprite().then(() => {
            // browser.reload();
        });
    });
});