'use strict';

import path from 'path';
import extend from '../utils/extend';
import log from '../utils/log';

/**
 * Returns a feature config file
 *
 * @param {string} directory
 * @param {string} file
 * @return {Object}
 */
export default (directory, file) => {
    var config = path.resolve(directory, file, 'index.json');

    try {
        config = require(config);
    }
    catch (error) {
        throw log.fail('File not found', config);
    }

    return extend({ dependencies: [] }, config);
}
