'use strict';
module.exports = function(production) {
    return {
        clean: {
            src: 'public'
        },
        html: require('./config/html.config'),
        image: require('./config/image.config'),
        test: require('./config/karma.conf'),
        style: require('./config/style.config'),
        script: production ? require('./config/webpack.config.production') : require('./config/webpack.config'),
        server: require('./config/server.config'),
        copy: require('./config/sync.config'),
        sprite: require('./config/sprite.config')
    }
};