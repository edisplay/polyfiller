'use strict';

module.exports = function (config) {
    config.set({
        basePath: './',

        browsers  : ['PhantomJS'],
        frameworks: ['mocha-debug', 'mocha', 'chai'],
        reporters : ['mocha', 'progress'],

        files: [
            'cache/tests/mocks.js',
            'cache/tests/api.js'
        ],

        client: {
            mocha: {
                reporter: 'html',
                ui      : 'bdd'
            }
        },

        logLevel : config.LOG_INFO,
        colors   : true,
        singleRun: true,
        autoWatch: false
    });
};
