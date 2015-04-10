'use strict';

import path from 'path';
import fs from 'fs';
import config from '../trunk/config';

/**
 * Resolves a feature path
 *
 * @param {...string} file path
 * @returns {string}
 */
export default function () {
    for (let location of config.db) {
        try {
            let file = path.resolve(location, ...arguments);

            if (fs.statSync(file)) {
                return file;
            }
        }
        catch (error) { }
    }
};
