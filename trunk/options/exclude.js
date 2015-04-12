'use strict';

import log from '../../utils/log';
import env from '../../utils/env';

/**
 * Excludes specified features from the dependency list
 *
 * @param {Array} files
 * @returns {Array}
 */
export default (features) => {
    let exclude = env.get('exclude');

    Array.prototype.forEach.call(exclude, (value, index) => {
        if (features.includes(value)) {
            features.splice(index, 1);
        }
    });

    return features;
};
