const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader', 'eslint-loader?fix=true'],
        exclude: /node_modules/,
      },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ]
  },
  resolve: {
    alias: {
      'Content': path.resolve(__dirname, 'src/js/Content'),
      'Utils': path.resolve(__dirname, 'src/js/Utils'),
    }
  },
  plugins: [HTMLWebpackPluginConfig],
}
