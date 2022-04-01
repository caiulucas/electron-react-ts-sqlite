const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: './electron/preload.ts',
  devtool: 'source-map',
  target: 'electron-preload',
  externals: require('./externals.webpack'),
  module: {
    rules: require('./rules.webpack'),
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'preload.js'
  }
};