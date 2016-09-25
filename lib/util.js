'use strict';
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const globBase = require('glob-base');
module.exports = {
    getPath(pattern) {
        return glob.sync(pattern);
    },
    getLocalConfig() {
        let script = path.join(process.cwd(),'frp.config.js');
        try {
            if (fs.statSync(script).isFile()) {
                return script;
            }
        } catch(e) {}
        return path.join(__dirname,'../frp.config.js');
    },
    getLocalScript() {
        let script = path.join(process.cwd(),'node_modules/frontplate-cli/lib/frp.js');
        try {
            if (fs.statSync(script).isFile()) {
                return script;
            }
        } catch(e) {}
        return path.join(__dirname,'frp.js');
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