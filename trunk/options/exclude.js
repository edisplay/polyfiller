'use strict';

import log from '../../utils/log';
import storage from '../storage/settings';

/**
 * Excludes specified features from the dependency list
 *
 * @param {Array} features
 * @returns {Array}
 */
export default (features) => {
    return features.filter((value, index) => {
        return !storage.get('exclude').includes(value);
    });
};
