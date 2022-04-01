const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser'],
  },
  entry: './src/index.tsx',
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      ...require('./rules.webpack'),
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'dist', 'renderer'),
      publicPath: '/'
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'js'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html')
    }),
  ].filter(Boolean)
};