var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(8080, '0.0.0.0', function (err, result) {
  if (err) {
    console.log('webpack-dev-server', err);
  }

  console.log('[webpack-dev-server]', 'http://0.0.0.0:8080/webpack-dev-server/');
});
