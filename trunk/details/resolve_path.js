'use strict';

import path from 'path';
import fs from 'fs';
import config from './config';
import log from '../../utils/log';

/**
 * Resolves a feature path
 *
 * @param {...string} file path
 * @returns {string}
 */
export default function () {
    for (let location of config.db) {
        let file = path.resolve(location, ...arguments);

        try {
            if (fs.statSync(file)) {
                return file;
            }
        }
        catch (error) {
            log.warn('resolve_path', {
                text: 'Could not find the following file ' + file, error })
        }
    }
};
