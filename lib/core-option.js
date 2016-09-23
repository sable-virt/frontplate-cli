'use strict';
const path = require('path');
const extend = require('extend');
class CoreOption {
    constructor(option,watch,production) {
        this._production = production || false;
        this._watch = watch || false;
        this._option = extend({}, option);
        this.load();
    }
    load() {
        for(let key in this._option) {
            try {
                let filepath = path.join(process.cwd(),this._option[key]);
                let mod = require(filepath);
                this._option[key] = mod;
            } catch(e) {
                delete this._option[key];
                console.error(e);
            }
        }
    }
    getOption() {
        return extend({},this._option);
    }
    isProduction() {
        return this._production;
    }
    isWatch() {
        return this._watch;
    }
}
module.exports = CoreOption;