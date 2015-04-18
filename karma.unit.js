'use strict';

module.exports = function (config) {
    config.set({
        basePath: './',

        browsers: [ 'PhantomJS' ],
        frameworks: [ 'mocha-debug', 'mocha', 'chai' ],
        reporters : [ 'mocha', 'progress', 'coverage' ],

        preprocessors: {
            'cache/tests/**/*.js': [ 'babel' ]
        },

        files: [
            'cache/tests/mocks.js',
            'cache/tests/client.js'
        ],

        client: {
            mocha: {
                reporter: 'html',
                ui      : 'bdd'
            }
        },

        // https://github.com/karma-runner/karma-coverage
        coverageReporter: {
            type: 'html',
            dir : 'cache/coverage/'
        },

        logLevel : config.LOG_INFO,
        colors   : true,
        singleRun: true,
        autoWatch: false
    });
};
