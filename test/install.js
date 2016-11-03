'use strict';
const assert = require('power-assert');
const install = require('../lib/util/install');
describe('install', function() {
    this.timeout(1000000);
    it('install',(done) => {
        install(process.cwd()).subscribe((code) => {
            assert(code === 0);
            done();
        });
    });
});