'use strict';
console.time('build');
const copy = require('./copy');
const html = require('./html');
const image = require('./image');
const script = require('./script');
const sprite = require('./sprite');
const style = require('./style');
const test = require('./test');
const clean = require('./clean');
const server = require('./server');

clean('public').then(() => {
    return Promise.all([
        sprite(require('../config/sprite.config'),{}),
        copy({
            "src/lib/**/*": "public/assets/lib"
        }),
        html('src/view/**/!(_)*.ejs', 'public', {
            title: 'hoge'
        }),
    ]);
}).then(() => {
    return Promise.all([
        script(),
        image('src/images/*.{gif,jpg,png}', 'public/assets/images', {}),
        style('src/sass/**/!(_)*.scss', 'public/assets/css', [
            require('autoprefixer')
        ]),
    ]);
// }).then(() => {
//     return test();
}).then(() => {
    console.timeEnd('build');
    process.exit(0);
}).catch((e) => {
    throw new Error(e);
    process.exit(1);
});