'use strict';

module.exports = function (config) {
    config.set({
        basePath: './',

        browsers  : ['PhantomJS'],
        frameworks: ['mocha-debug', 'mocha', 'chai'],
        reporters : ['mocha'],

        files: [
            'cache/tests/source.js',
            'cache/tests/client.js'
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
