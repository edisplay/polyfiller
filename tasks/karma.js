'use strict';

import clients from '../files/clients';

export default (grunt, options) => {
    let timeout = 100 * 1000;

    return {
        options: {
            basePath: './',
            frameworks: ['mocha', 'chai'],

            files: [
                'cache/tests/source.js',
                'cache/tests/client.js'
            ],

            client: {
                useFrame: true,

                mocha: {
                    reporter: 'html',
                    ui      : 'bdd',
                    timeout : 10 * 1000,
                }
            },

            logLevel : 'INFO',
            colors   : true,
            singleRun: true,
            autoWatch: false
        },

        api: {
            options: {
                browsers  : ['PhantomJS'],
                reporters : ['mocha', 'progress'],
            }
        },

        client: {
            options: {
                browsers : Object.keys(clients),
                reporters: ['progress', 'saucelabs'],

                browserDisconnectTimeout  : timeout,
                browserNoActivityTimeout  : timeout,
                browserDisconnectTolerance: 2,

                sauceLabs: {
                    testName : 'Polyfiller tests',
                    username : process.env.SAUCE_USERNAME,
                    accessKey: process.env.SAUCE_ACCESS_KEY,
                    doctor   : true,
                    recordScreenshots: false,
                },

                customLaunchers: clients
            }
        }
    };
};
