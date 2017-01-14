'use strict';

// npm i -D eslint-loader eslint babel babel-loader
// require build/typescript,build/sass

const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');
// const sprite = require('sprite-webpack-plugin');

module.exports = {
  plugins: [
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(process.cwd(), 'src/assets/sprites/icon/'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(process.cwd(), 'src/assets/images/sprites.png'),
        css: path.resolve(process.cwd(), 'src/assets/css/sprites/_sprites.scss')
      },
      spritesmithOptions: {
        options: {
          padding: 6
        }
      },
      apiOptions: {
        cssImageRef: "../images/sprites.png"
      }
    })
  ]
};