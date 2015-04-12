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
    return features.filter(feature => {
        try {
            let exclude = env.get('exclude');

            return !Array.includes(exclude, feature);
        }
        catch (error) {
            throw log.error('option.exclude', {
                text : feature, error });
        }
    });
};
