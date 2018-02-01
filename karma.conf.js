// Karma configuration
// Generated on Tue Sep 27 2016 22:14:28 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //  './node_modules/babel-polyfill/dist/polyfill.min.js',
        //'src/*.js',
        'tests/**/*.test.js'
    ],
    webpack: {
        module: {

            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules)/,
                },
            ]
        },
        devtool: 'inline-source-map',
    },

    // list of files to exclude
    exclude: [

    ],
    preprocessors: {
        'tests/**/*.test.js': ['webpack'],
        'src/*.js': ['coverage'],
    },

    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    // Configure code coverage reporter
    coverageReporter: {
        reporters: [
            // generates ./coverage/lcov.info
            {type:'lcovonly', subdir: '.'},
            // generates ./coverage/coverage-final.json
            {type:'json', subdir: '.'},
        ]
    },
    plugins: [
        'karma-webpack',
        'karma-jasmine',
        'karma-chai',
        // 'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-sourcemap-loader',
        'karma-coverage',
    ],
  })
}
