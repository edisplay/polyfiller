'use strict';

module.exports = function (config) {
    config.set({
        basePath: './',
        port: 9001,

        browsers  : ['PhantomJS'],
        frameworks: ['mocha-debug', 'mocha', 'requirejs', 'chai', 'chai-as-promised' ],
        reporters : ['mocha', 'progress', 'coverage'],

        client: {
            mocha: {
                reporter: 'html',
                ui      : 'bdd'
            }
        },

        preprocessors: {
            'tests/**/*.js': [ 'babel' ],
            '{trunk,utils}/**/*.js': [ 'coverage' ]
        },

        // https://github.com/karma-runner/karma-coverage
        coverageReporter: {
            type: 'html',
            dir : 'cache/coverage/'
        },

        files: [
            'index.js',
            'tests/**/*.js',
        ],

        exclude: [],

        colors: true,
        autoWatch: false,

        // config.{LOG_DISABLE,LOG_ERROR,LOG_WARN,LOG_DEBUG,LOG_INFO}
        logLevel : config.LOG_INFO,

        singleRun: true
    });
};
