'use strict';

var clients = require('./clients');

module.exports = function (config) {
    config.set({
        browsers  : Object.keys(clients),
        reporters : ['mocha', 'saucelabs'],

        sauceLabs: {
            testName: 'Polyfiller tests',
            username:  process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
        },

        customLaunchers: clients
    });
};
