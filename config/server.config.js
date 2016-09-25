'use strict';
const historyApiFallback = require('connect-history-api-fallback');
module.exports = {
  "server": 'public',
  "port": 3000,
  "middleware": [
    // historyApiFallback()
  ],
  "ghostMode": {
    "clicks": true,
    "scroll": true,
    "forms": {
      "submit": true,
      "inputs": true,
      "toggles": true
    }
  }
};