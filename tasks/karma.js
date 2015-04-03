'use strict';

module.exports = function (grunt, options) {
    return {
        options: {
            configFile: 'karma.conf.js'
        },

        tests: {
            files: [
                {
                    src: ['tests/**/*.js']
                }
            ]
        }
    };
};
