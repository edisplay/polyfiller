'use strict';

module.exports = function (grunt, options) {
    return {
        options: {
            force: false
        },

        api: {
            src: 'cache/coverage/lcov.info'
        }
    };
};
