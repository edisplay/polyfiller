'use strict';

var clients = require('./clients');

module.exports = function (config) {
    var timeout = 100 * 1000;

    config.set({
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
    });
};
