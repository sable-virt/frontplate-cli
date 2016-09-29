'use strict';
const assert = require('power-assert');
const fs = require('fs');
const rimraf = require('rimraf');
const timer = require('../lib/timer');
describe('timer', function() {
    beforeEach(() => {
        timer.reset();
    });
    afterEach(() => {

    });
    it('default',() => {
        assert(isNaN(timer.get('test')));
    });
    it('record',(done) => {
        timer.start('test');
        timer.start('test2');
        setTimeout(() => {
            timer.end('test');
            timer.end('test2');
            assert(!isNaN(timer.get('test')));
            assert(!isNaN(timer.get('test2')));
            done();
        },100);
    });
    it('reset',(done) => {
        timer.start('test');
        setTimeout(() => {
            timer.end('test');
            timer.reset();
            assert(isNaN(timer.get('test')));
            done();
        },100);
    });
    it('output',(done) => {
        timer.start('test');
        timer.start('test2');
        setTimeout(() => {
            timer.end('test');
            timer.end('test2');
            let str = timer.output();
            assert(str);
            done();
        },100);
    });
});