/*
 * Webpack dev configuration
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = require('./webpack.base.config')({
  devtool: 'eval',
  devServer: {
    outputPath: path.resolve('../build'),
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    compress: true,
    noInfo: true,
  },
  entry: [
    path.resolve('app/src/main.js')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  cssLoaders: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader'),
  postcssPlugins: [],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true // Inject all files that are generated by webpack, e.g. bundle.js
    }),
    new ProgressBarPlugin()
  ],
  babelQuery: {
    cacheDirectory: true
  }
});