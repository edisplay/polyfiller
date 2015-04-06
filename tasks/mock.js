'use strict';

module.exports = function (grunt, options) {
    return {
        units: {
            files: {
                'cache/tests/mocks.json': ['cache/tests/mocks.js']
            }
        }
    };
};
