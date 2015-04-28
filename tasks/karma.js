'use strict';

module.exports = function (grunt, options) {
    return {
        options: {
            basePath: '../',
            frameworks: ['mocha', 'chai'],

            files: [
                'cache/tests/source.js',
                'cache/tests/client.js'
            ],

            client: {
                useFrame: true,

                mocha: {
                    reporter: 'html',
                    ui      : 'bdd'
                }
            },

            logLevel : 'INFO',
            colors   : true,
            singleRun: true,
            autoWatch: false
        },

        api: {
            options: {
                configFile: 'files/karma.api.js'
            }
        },

        client: {
            options: {
                configFile: 'files/karma.client.js'
            }
        }
    };
};
