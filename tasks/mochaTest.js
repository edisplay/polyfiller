'use strict';

module.exports = function (grunt, options) {
    return {
        api: {
            options: {
                timeout    : 3000,
                ignoreLeaks: false,
                ui         : 'bdd',
                reporter   : 'spec'
            },

            src: [
                'cache/tests/api.js'
            ]
        }
    };
};
