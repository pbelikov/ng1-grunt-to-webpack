module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
      'src/app/*.module.js',
      'src/app/**/*.module.js',
      'src/app/*.config.js',
      'src/app/*.component.js',
      'src/app/*.controller.js',
      'src/app/**/*.js'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-browserify'
    ],
    browserify: {
      debug: true,
      transform: [
        ['babelify', { 'presets': ['env'] }]
      ]
    },
    preprocessors: {
      'src/app/**/*.js': 'browserify'
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};