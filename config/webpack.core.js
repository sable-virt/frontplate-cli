'use strict';
const webpack = require("webpack");
const entries = require("webpack-entries");
const path = require("path");
const util = require("../lib/util/util");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */

const localConfig = path.join(process.cwd(),'.eslintrc');
const globalConfig = path.join(__dirname,'/../.eslintrc');

module.exports = {
    entry: entries(`./${FRP_SRC}/js/!(_*|*spec).js`,true),
    output: {
        path: FRP_DEST + '/assets/js',
        publicPath: '/assets',
        filename: "[name].js",
        sourceMapFilename: 'maps/[name].map',
        jsonpFunction: 'fr'
    },
    resolve: { modules: [ `./${FRP_SRC}/js`] },
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
                    configFile: util.exists(localConfig) ? localConfig : globalConfig,
                    failOnError: true
                },
                babel: {
                    presets: ["es2015"]
                }
            }
        })
    ]
};
