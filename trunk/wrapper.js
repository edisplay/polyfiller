'use strict';

/**
 * A safety wrapper for CSP and Web Worker environment
 *
 * @param {string} content
 * @returns {string}
 */
export default (content) => {
    return `;(function () { ${content}; }.call(self));`;
};
