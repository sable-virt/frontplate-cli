'use strict';
const path = require('path');
const glob = require('glob');
const globBase = require('glob-base');
module.exports = {
    getPath(pattern) {
        return glob.sync(pattern);
    },
    destPath(pattern,dest,filepath,ext) {
        let globStats = globBase(pattern),
            baseExt = path.extname(filepath),
            filename = path.basename(filepath,baseExt),
            dirname = path.dirname(filepath).replace(globStats.base,'');
        ext = ext || baseExt;
        return path.join(dest,dirname,filename + ext);
    }
};