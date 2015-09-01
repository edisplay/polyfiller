'use strict';

export default (grunt, options) => {
    return {
        options: {
            force: false
        },

        api: {
            src: 'cache/coverage/lcov.info'
        }
    };
};
