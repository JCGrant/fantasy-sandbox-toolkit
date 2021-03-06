var path = require('path');
var webpack = require('webpack');

var PATHS = {
  src:  path.resolve(__dirname, 'src'),
  dist:  path.resolve(__dirname, 'dist'),
};

var config = {
  entry: path.resolve(PATHS.src, 'main.js'),
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      {
        test: /.jsx?$/,
        include: PATHS.src,
        loaders: [
          'babel?cacheDirectory'
        ],
      }
    ]
  },
};

module.exports = config;
