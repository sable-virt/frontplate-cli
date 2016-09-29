'use strict';
const assert = require('power-assert');
const image = require('../../lib/tasks/image');
describe('image', function() {
    it('init',(done) => {
        image({src: 'src/**/*.png',dest:'public'}).subscribe(() => {
            done();
        });
    });
});