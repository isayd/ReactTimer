var webpackConfig = require('./webpack.config.js');

module.exports = function(config){

  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks:['mocha'],

    // Access all files with .test.jsx
    files:['app/tests/**/*.test.jsx'],

    // for each of .test.jsx files, we want to do a different task
    preprocessors:{
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },

    //show wich files past and wich files failed
    reporters: ['mocha'],

    //cancel test after a certain amount of time
    client: {
      mocha:{
        timeout:'5000'
      }
    },

    // load webpack.config.js
    webpack: webpackConfig,

    //No use of webpack server from server.js
    webpackServer: {
        noInfo: true
    }
  });
};
