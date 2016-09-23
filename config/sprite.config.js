'use strict';
const util = require('util');
module.exports = [
  {
    src: 'src/sprites/icon/*.{png,gif,jpg}',
    destImage: 'src/images/icon.png',
    destCSS: 'src/sass/sprites/_icon.scss',
    imgPath: '../images/icon.png',
    padding: 2
  }
];