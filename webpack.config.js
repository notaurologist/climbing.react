var webpack = require('webpack');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './app/js/main'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  postcss: [mixins, nested],
  cssnext: {
    features: {
      import: {
        path: ['/app/css/']
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'jsx?harmony&insertPragma=React.DOM&stripTypes', 'flowcheck'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader!cssnext-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=4096' }
    ]
  }
};
