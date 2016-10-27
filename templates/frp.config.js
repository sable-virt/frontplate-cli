'use strict';
/*
FRP_DEST: 出力先パス
{
 clean: https://github.com/frontainer/frontplate-cli/tree/master/config/clean.config.js,
 html: https://github.com/frontainer/frontplate-cli/tree/master/config/html.config.js,
 style: https://github.com/frontainer/frontplate-cli/tree/master/config/style.config.production.js | https://github.com/frontainer/frontplate-cli/tree/master/config/style.config.js,
 script: https://github.com/frontainer/frontplate-cli/tree/master/config/webpack.config.production.js | https://github.com/frontainer/frontplate-cli/tree/master/config/webpack.config.js
 server: https://github.com/frontainer/frontplate-cli/tree/master/config/server.config.js,
 copy: https://github.com/frontainer/frontplate-cli/tree/master/config/copy.config.js,
 sprite: https://github.com/frontainer/frontplate-cli/tree/master/config/sprite.config.js,
 test: https://github.com/frontainer/frontplate-cli/tree/master/config/test.config.js
}
 */
module.exports = function(production) {
    global.FRP_DEST = global.FRP_DEST || 'public';
    return {
        clean: {},
        html: {},
        style: production ? {} : {},
        script: production ? {} : {},
        server: {},
        copy: {},
        sprite: {},
        test: {}
    }
};