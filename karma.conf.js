var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    frameworks: ['tap', 'sinon'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './karma.entry.js',
    ],
    preprocessors: {
      './karma.entry.js': ['webpack'],
      './src/**/*.js': ['webpack'],
    },
    reporters: ['tape'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    webpack: {
      node: {
        fs: 'empty',
      },
      devtool: 'inline-source-map',
      resolve: webpackConfig.resolve,
      plugins: webpackConfig.plugins
      .filter(p => !p.__KARMA_IGNORE__),
      module: {
        loaders: webpackConfig.module.loaders,
      },
    },
    webpackMiddleware: {
      noInfo: true,
    },
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-phantomjs-launcher'),
      require('karma-tape-reporter'),
      require('karma-sinon'),
    ],
  })
}
