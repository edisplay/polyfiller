'use strict';

var clients = require('./clients');

module.exports = function (config) {
    config.set({
        browsers : Object.keys(clients),
        reporters: ['dots', 'saucelabs'],

        browserDisconnectTimeout  : 15 * 1000,
        browserDisconnectTolerance: 2,
        browserNoActivityTimeout  : 60 * 1000,

        sauceLabs: {
            testName : 'Polyfiller tests',
            username : process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
            doctor   : true,
        },

        customLaunchers: clients
    });
};
