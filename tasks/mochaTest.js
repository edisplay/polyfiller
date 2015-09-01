'use strict';

export default (grunt, options) => {
    return {
        api: {
            options: {
                timeout    : 10 * 1000,
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
