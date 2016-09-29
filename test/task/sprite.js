'use strict';
const assert = require('power-assert');
const sprite = require('../../lib/tasks/sprite');
describe('sprite', function() {
    it('init',(done) => {
        sprite([]).subscribe(() => {
            done();
        });
    });
});