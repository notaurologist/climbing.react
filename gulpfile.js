var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('clean-build', function () {
  return gulp.src('build/*.js', { read: false })
    .pipe(clean());
});

// The development server (the recommended option for development)
gulp.task('default', ['webpack-dev-server']);

// Production build
gulp.task('build', ['clean-build', 'webpack:build']);

gulp.task('webpack:build', function (callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, function (err, stats) {
    if(err) throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('webpack-dev-server', function (callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = 'eval';
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    contentBase: './build',
    publicPath: myConfig.output.publicPath,
    hot: true,
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', function (err) {
    if(err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
});
