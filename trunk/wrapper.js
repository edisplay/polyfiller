'use strict';

/**
 * @param {string} content
 * @returns {string}
 */
export default (content) => {
    return `;(function () {
                'use strict';
                ${content}};
            }.call(window));`;
};
