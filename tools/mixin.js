'use strict';

import entries from './entries';

/**
 * Mixin
 *
 * @param {Object} to
 * @param {Object} from
 * @return {Object}
 */
export default (to, from) => {
    for (let [key, value] of entries(from)) {
        if (value) {
            if (Array.isArray(value)) {
                to[key].push(...value);
            }
            else {
                to[key] = value;
            }
        }
    }

    return to;
};
