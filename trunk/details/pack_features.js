'use strict';

import storage from '../storage/settings';

/**
 * Packs a and wraps list of polyfills into one string.
 *
 * @param {Array} features
 * @return {string}
 */
export default (features) => {
    return storage.get('wrapper')(features);
};

