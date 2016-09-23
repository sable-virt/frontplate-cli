'use strict';
// console.time('test');

// const Task = require('./lib/promise-task');
// const html = require('./tasks/html');
// const copy = require('./tasks/copy');
// const image = require('./tasks/image');
// const sprite = require('./tasks/sprite');
// const script = require('./tasks/script');
// const style = require('./tasks/style');
// const test = require('./tasks/test');
// const server = require('./tasks/server');
//
// Task.register('html', (resolve, reject) => {
//     html('src/view/**/!(_)*.ejs', 'public', {
//         title: 'hoge'
//     }).then(resolve, reject);
// });
//
// Task.register('copy', (resolve, reject) => {
//     copy({
//         "src/lib/**/*": "public/assets/lib"
//     }).then(resolve, reject);
// });
//
// Task.register('image', (resolve, reject)=> {
//     image(['src/images/*.{gif,jpg,png}'],'public/assets/images',{}).then(resolve,reject);
// });
//
// Task.register('sprite', (resolve, reject)=> {
//     sprite([
//         'src/sprites/icon/web-navigation-line-craft-1-109681.png',
//         'src/sprites/icon/web-navigation-line-craft-2-109682.png',
//         'src/sprites/icon/web-navigation-line-craft-3-109688.png',
//         'src/sprites/icon/web-navigation-line-craft-4-109689.png',
//         'src/sprites/icon/web-navigation-line-craft-5-109690.png'
//     ],'public/assets/images',{}).then(resolve,reject);
// });
//
// Task.register('style', (resolve, reject)=> {
//     style('src/sass/**/!(_)*.scss','public/assets/css',[
//         require('autoprefixer')
//     ]).then(resolve,reject);
// });
// Task.register('script', (resolve, reject)=> {
//     script().then(resolve,reject);
// });
// Task.register('test', (resolve, reject)=> {
//     test().then(resolve,reject);
// });
// Task.register('server', (resolve, reject)=> {
//     server(require('./config/server.config')).then(resolve,reject);
// });
// // Task.run(['style']).then((e) => {
// //     // console.log('complete', e);
// //     console.timeEnd('analyze');
// // }).catch((e) => {
// //     console.log('ERROR', e);
// // });
//
// // Task.run(['sprite','copy','html'],['script','image','style']).then((e) => {
// //     // console.log(s'complete', e);
// //     console.timeEnd('test');
// // }).catch((e) => {
// //     console.log('ERROR', e);
// // });
//
// Task.register('watch',(resolve,reject) => {
//     Task.watch('src/**/*.scss',['style']).then((watcher) => {
//         // console.log('comp',res);
//     });
//     resolve();
// });
// Task.run(['watch'],['server']);

require('./tasks/build');