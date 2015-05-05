'use strict';

import path from 'path';

export default {
    /**
     * Locations
     *
     * @return {Array}
     */
    catalog: [ path.join(__dirname, './catalog') ],

    /**
     * Excluded features
     *
     * @return {Array}
     */
    exclude: [],

    /**
     * Verbose mode is an option that provides additional details
     * as to what the package is doing
     *
     * @return {boolean}
     */
    verbose: false,

    /**
     * A safety wrapper for CSP and Web Worker environment
     *
     * @param {string} content
     * @returns {string}
     */
    wrapper (content) {
        return content &&
            `;(function () {
                ${content}
            }.call(
                typeof window === 'object' && window ||
                typeof self   === 'object' && self   ||
                typeof global === 'object' && global ||
                {}
            ));`
        ;
    }
};
