'use strict';

var path = require('path');

module.exports = function (grunt, options) {
    return {
        //options: {
        //  basePath: path.resolve('./cache'),
        //},

        unit: {
            options: {
                configFile: 'karma.unit.js'
            }
        },

        client: {
            options: {
                configFile: 'karma.conf.js'
            }
        }
    };
};
