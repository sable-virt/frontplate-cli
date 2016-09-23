'use strict';
const cpx = require('cpx');
const ora = require('ora');

function copy(from,to,options) {
    return new Promise((resolve,reject) => {
        cpx.copy(from, to, options, (e) => {
            if (e) return reject(e);
            resolve({from:from,to:to});
        });
    });
}

module.exports = function(data,options) {
    console.time('copy');
    const spinner = ora('[build] copy').start();
    let promises = Object.keys(data).map((key,index) => {
        return copy(key,data[key],options);
    });
    Promise.all(promises).then(() => {
        spinner.succeed();
        console.timeEnd('copy');
    },() => {
        spinner.fail();
    });
    return Promise.all(promises);
};