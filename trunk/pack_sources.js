'use strict';

import wrapper from './wrapper';
import log from '../utils/log';

/**
 * @param {Array}
 * @returns {string}
 */
export default (features) => {
    let result = '';

    try {
        features.forEach(feature =>
            result += feature.source);
    }
    catch (error) {
        throw log.error('pack_sources', {
            text: 'Failed to pack the source files', error });
    }

    return wrapper(result);
};
