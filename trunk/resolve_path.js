'use strict';

import path from 'path';
import fs from 'fs';

import env from '../utils/env';

/**
 * Resolves a feature path
 *
 * @param {string} feature
 * @param {string} file
 * @returns {string}
 */
export default (feature, file) => {
    let location = [env.get('path'), 'db'],
        resolved = null;

    location.forEach((location) => {
        try {
            fs.statSync(resolved = path.resolve(location, feature, file));
        }
        catch (error) { }
    });

    return resolved;
};
