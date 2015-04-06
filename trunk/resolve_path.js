'use strict';

import path from 'path';
import fs from 'fs';

import env from '../utils/env';
import config from '../trunk/config';

/**
 * Resolves a feature path
 *
 * @param {string} feature
 * @param {string} file
 * @returns {string}
 */
export default (feature, file) => {
    let resolved = null;

    config.db.forEach((location) => {
        try {
            fs.statSync(resolved = path.resolve(location, feature, file));
        }
        catch (error) { }
    });

    return resolved;
};
