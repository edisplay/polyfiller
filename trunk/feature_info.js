'use strict';

import resolve_path from './resolve_path';
import extend from '../utils/extend';
import log from '../utils/log';

/**
 * Returns a feature info
 *
 * @param {string} location
 * @param {string} file
 * @return {Object}
 */
export default (feature) => {
    var config = resolve_path(feature, 'index.json');

    try {
        config = require(config);
    }
    catch (error) {
        throw log.fail('File not found', config, error.message);
    }

    return extend({ dependencies: [] }, config);
}
