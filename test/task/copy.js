'use strict';
const assert = require('power-assert');
const copy = require('../../lib/tasks/copy');
describe('copy', function() {
    it('init',() => {
        copy({}).subscribe(() => {
            done();
        });
    });
});