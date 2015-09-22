import config from '../config';
import webpackConfig from './webpack/client';

const globals = config.get('globals');
const KARMA_ENTRY_FILE  = 'karma.entry.js';

function makeDefaultConfig () {
  const preprocessors = {};

  preprocessors[KARMA_ENTRY_FILE] = ['webpack'];
  preprocessors[config.get('dir_src') + '/**/*.js'] = ['webpack'];

  return {
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './' + KARMA_ENTRY_FILE
    ],
    singleRun  : globals.__PROD__,
    frameworks : ['tap', 'sinon'],
    preprocessors : preprocessors,
    reporters : ['tape'],
    browsers : ['PhantomJS'],
    webpack : {
      node: {
        fs: 'empty',
      },
      devtool : 'inline-source-map',
      resolve : webpackConfig.resolve,
      plugins : webpackConfig.plugins
        .filter(p => !p.__KARMA_IGNORE__),
      module  : {
        loaders : webpackConfig.module.loaders
      }
    },
    webpackMiddleware : {
      noInfo : true
    },
    plugins : [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-phantomjs-launcher'),
      require('karma-tape-reporter'),
      require('karma-sinon'),
    ]
  };
}

export default (karmaConfig) => karmaConfig.set(makeDefaultConfig());
