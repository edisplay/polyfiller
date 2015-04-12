'use strict';

import resolve_path from './resolve_path';
import extend from '../../utils/extend';
import log from '../../utils/log';

/**
 * Returns a feature info
 *
 * @param {string} feature
 * @return {Object}
 */
export default (feature) => {
    let config = resolve_path(feature, 'index.json');

    try {
        config = require(config);
    }
    catch (error) {
        throw log.error('feature_info', {
            text : 'File not found ' + config, error });
    }

    return extend({ dependencies: [] }, config);
}