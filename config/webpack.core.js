'use strict';
const webpack = require("webpack");
const entries = require("webpack-entries");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
module.exports = {
    entry: entries('./src/js/!(_*|*spec).js',true),
    output: {
        path: FRP_DEST + '/assets/js',
        publicPath: '/assets',
        filename: "[name].js",
        sourceMapFilename: 'maps/[name].map',
        jsonpFunction: 'fr'
    },
    resolve: { modules: [ './src/js'] },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint', enforce: 'pre'},
            {test: /\.html$/, loader: 'html'},
            {test: /\.json$/, loader: 'json'},
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: __dirname + '/../.eslintrc',
                    failOnError: true
                },
                babel: {
                    presets: ["es2015"]
                }
            }
        })
    ]
};
