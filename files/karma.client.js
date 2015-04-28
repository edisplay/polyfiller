'use strict';

var clients = require('./clients');

module.exports = function (config) {
    config.set({
        browsers  : Object.keys(clients),
        reporters : ['mocha', 'saucelabs'],

        sauceLabs: {
            testName: 'Polyfiller tests',
            public: "public"
        },

        customLaunchers: clients
    });
};
