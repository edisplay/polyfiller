'use strict';

var path = require('path');

module.exports = function (grunt, options) {
    return {
        //options: {
        //  basePath: path.resolve('./cache'),
        //},
        //

        api: {
            options: {
                configFile: 'karma.api.js'
            }
        }
    };
};
