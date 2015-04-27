'use strict';

/** Benchmark tests */

export default {
    name: 'Load feature',

    tests: {
        npm () {
            return require('../trunk/catalog/DOM4');
        },

        local () {
            return require('../trunk/catalog/URL');
        }
    }
};
