/*
 * Webpack dev configuration
 */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import baseConfig from './webpack.base.config';

export default baseConfig({
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    outputPath: path.resolve(process.cwd(), 'build'),
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    compress: true,
    noInfo: true,
  },
  entry: [
    'webpack-hot-middleware/client',
    path.resolve('app/main.js'),
  ],
  output: {
    filename: '[name].js',
  },
  cssLoaders: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader'),
  postcssPlugins: [],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
    }),
    new ProgressBarPlugin(),
  ],
  babelQuery: {
    cacheDirectory: true,
  },
});
