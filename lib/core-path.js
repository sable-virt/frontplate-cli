'use strict';
const glob = require('glob');
class CorePath {
    constructor(pattern) {
        this._pattern = pattern;
        this._files = glob.sync(pattern);
    }
    getPattern() {
        return this._pattern;
    }
    getFiles() {
        return this._files;
    }
}
module.exports = CorePath;