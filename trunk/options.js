'use strict';

import path from 'path';

export default {
    catalog: [ path.join(__dirname, './catalog') ],
    exclude: [],

    /**
     * A safety wrapper for CSP and Web Worker environment
     *
     * @param {string} content
     * @returns {string}
     */
    wrapper (content) {
        return `;(function () { ${content}; }.call(self));`;
    }
}