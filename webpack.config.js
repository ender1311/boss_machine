'use strict';

const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');

module.exports = {
  
  entry: './browser/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './public/js/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        }
      }
    ]
  }
};