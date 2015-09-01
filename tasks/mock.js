'use strict';

export default (grunt, options) => {
    return {
        api: {
            options: {
                process: function (name, source) {
                    return 'window.Mock = ' + source;
                }
            },

            files: {
                'cache/tests/source.js': [ 'cache/tests/mocks.js' ]
            }
        }
    };
};
