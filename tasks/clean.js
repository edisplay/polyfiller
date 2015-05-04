'use strict';

module.exports = function (grunt, options) {
    return {
        cache: {
            src: [
                'npm-shrinkwrap.json',
                'npm-debug.log',
                'build',
                'cache'
            ]
        }
    };
};
