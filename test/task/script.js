'use strict';
const assert = require('power-assert');
const script = require('../../lib/tasks/script');
describe('script', function() {
    it('init',(done) => {
        script({}).subscribe(() => {
            done();
        });
    });
});