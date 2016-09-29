'use strict';
const assert = require('power-assert');
const fs = require('fs');
const rimraf = require('rimraf');
const util = require('../lib/util');
describe('install', function () {
    beforeEach(() => {
        // rimraf.sync(DEST);
    });
    afterEach(() => {
        // rimraf.sync(DEST);
    });
    it('getPath', () => {
        let p = util.getPath('*.js');
        assert(p.length === 2);
        assert.deepEqual(p, [
            'frp.config.js',
            'index.js'
        ]);

        p = util.getPath('test/*.js');
        assert(p.length === 4);
        assert.deepEqual(p, [
            'test/index.js',
            'test/install.js',
            'test/timer.js',
            'test/util.js'
        ]);
    });
    it('getLocalConfig', () => {
        assert(util.getLocalConfig() === process.cwd() + '/frp.config.js');
    });
    it('getLocalScript', () => {
        assert(util.getLocalScript() === process.cwd() + '/lib/frp.js');
    });
    it('destPath', () => {
        assert(util.destPath('*.js', 'public', 'test.js') === 'public/test.js');
        assert(util.destPath('js/*.js', 'public', 'test.js') === 'public/test.js');
        assert(util.destPath('js/*.ts', 'public', 'test.ts', '.js') === 'public/test.js');
        assert(util.destPath('js/**/*.ts', 'public/js', 'test.ts', '.js') === 'public/js/test.js');
    });
    it('exists', () => {
        assert(util.exists('./frp.config.js'));
        assert(!util.exists('./hoge.config.js'));
    });
    it('existsConfig', () => {
        assert(util.existsConfig());
    });
    it('flatten', () => {
        assert.deepEqual(util.flatten(null), []);
        assert.deepEqual(util.flatten(['a', 'b', 'c']), ['a', 'b', 'c']);
        assert.deepEqual(util.flatten(['a', 'b', ['c']]), ['a', 'b', 'c']);
        assert.deepEqual(util.flatten([['a'], 'b', ['c']]), ['a', 'b', 'c']);
        assert.deepEqual(util.flatten([['a', 'b'], ['c']]), ['a', 'b', 'c']);
        assert.deepEqual(util.flatten([['a', ['b']], ['c']]), ['a', ['b'], 'c']);
        assert.deepEqual(util.flatten(util.flatten([['a', ['b']], ['c']])), ['a', 'b', 'c']);
    });
    it('getConfig', () => {
        assert.deepEqual(util.getConfig({}),{
                clean: {
                    src: 'public'
                },
                html: require('../config/html.config'),
                image: require('../config/image.config'),
                style: require('../config/style.config'),
                script: require('../config/webpack.config'),
                server: require('../config/server.config'),
                copy: require('../config/copy.config'),
                sprite: require('../config/sprite.config'),
                test: require('../config/test.conf')
            });
        assert.deepEqual(util.getConfig({production:true}),{
            clean: {
                src: 'public'
            },
            html: require('../config/html.config'),
            image: require('../config/image.config'),
            style: require('../config/style.config'),
            script: require('../config/webpack.config.production'),
            server: require('../config/server.config'),
            copy: require('../config/copy.config'),
            sprite: require('../config/sprite.config'),
            test: require('../config/test.conf')
        });
    });
});