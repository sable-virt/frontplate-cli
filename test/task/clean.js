'use strict';
const assert = require('power-assert');
const clean = require('../../lib/tasks/clean');
describe('clean', function() {
    it('init',(done) => {
        clean({src: 'tmp'}).subscribe(() => {
            done();
        });
    });
});