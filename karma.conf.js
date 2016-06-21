module.exports = function(config) {
  'use strict';
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-resource/angular-resource.js',
      'src/app-module*.js',
      'src/*controller.js',
      'src/*service.js',
      'test/*.js'
    ],

    reporters: ['progress'],

    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS']

  });
};
