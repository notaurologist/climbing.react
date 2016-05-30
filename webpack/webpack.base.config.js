/*
 * Webpack base configuration
 */
const path = require('path');
const webpack = require('webpack');

module.exports = (options) => ({
  devtool: options.devtool,
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output),
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: options.babelQuery
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: options.cssLoaders
    }, {
      test: /\.html$/,
      loader: 'html',
    }, {
      test: /\.(svg|png|jpg|woff|woff2)$/,
      loader: 'url?limit=4096'
    }]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  target: 'web',
  stats: false,
  progress: true
});
