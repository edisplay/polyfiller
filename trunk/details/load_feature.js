'use strict';

import fs from 'fs';
import resolve from 'resolve';

import resolve_path from './resolve_path';
import log from '../../utils/log';

/**
 * Returns a feature file
 *
 * @param {string} feature
 * @return {string}
 */
export default (file) => {
    try {
        try {
            file = resolve.sync(file);
        }
        catch (error) { }

        if (!file) {
            file = resolve_path(file);
        }

        return fs.readFileSync(file, 'utf8');
    }
    catch (error) {
        throw log.error('load_feature', {
            text: 'Package not found ' + file });
    }
}
