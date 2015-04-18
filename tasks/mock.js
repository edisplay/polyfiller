'use strict';

module.exports = function (grunt, options) {
    return {
        units: {
            options: {
                process: function (name, source) {
                    return 'function Mock () { return ' + source + '}';
                }
            },

            files: {
                'cache/tests/mocks.js': ['cache/tests/mocks.js']
            }
        }
    };
};
