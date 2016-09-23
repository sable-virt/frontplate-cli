module.exports = {
  use: [
    // 'doiuse',
    'autoprefixer',
    'css-mqpacker'
  ],
  doiuse: {
    browsers: [
      'last 3 version',
      'ie >= 9',
      'Android >= 4.0'
    ]
  },
  autoprefixer: {
    browsers: [
      'last 3 version',
      'ie >= 9',
      'Android >= 4.0'
    ],
  },
  'css-mqpacker': {
  }
};