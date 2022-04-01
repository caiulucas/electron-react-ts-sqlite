const path = require('path');

module.exports = [
  {
    resolve: {
      extensions: ['.ts', '.js'],
    },
    devtool: 'source-map',
    entry: './electron/main.ts',
    target: 'electron-main',
    externals: require('./externals.webpack'),
    module: {
      rules: require('./rules.webpack')
    },
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].js',
    },
    node: {
      __dirname: false,
      __filename: false
    }
  },
  require('./preload.webpack'),
];