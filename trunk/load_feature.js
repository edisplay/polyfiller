'use strict';

import fs from 'fs';
import resolve from 'resolve';

import resolve_path from './resolve_path';
import log from '../utils/log';

/**
 * Returns a feature file
 *
 * @param {string} feature
 * @param {string} name
 * @return {string}
 */
export default (feature, name) => {
    var file = null;

    try {
        try {
            file = resolve.sync(name);
        }
        catch (error) { }

        if (!file) {
            file = resolve_path(feature, 'index.js');
        }

        return fs.readFileSync(file, 'utf8');
    }
    catch (error) {
        throw log.fail('Package not found', feature);
    }
}
