'use strict';
module.exports = function(production) {
    global.FRP_DEST = global.FRP_DEST || 'public';
    return {
        clean: require('./config/clean.config'),
        html: require('./config/html.config'),
        style: production ? require('./config/style.config.production') : require('./config/style.config'),
        script: production ? require('./config/webpack.config.production') : require('./config/webpack.config'),
        server: require('./config/server.config'),
        copy: require('./config/copy.config'),
        sprite: require('./config/sprite.config'),
        test: require('./config/test.conf')
    }
};