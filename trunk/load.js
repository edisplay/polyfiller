'use strict';

import fs from 'fs';
import path from 'path';
import resolve from 'resolve';
import log from '../utils/log';

/**
 * Returns a feature file
 *
 * @param {string} directory
 * @param {string} name
 * @return {string}
 */
export default (directory, name) => {
    var file = null;

    try {
        try {
            file = resolve.sync(name);
        }
        catch (error) { }

        if (!file) {
            file = path.resolve(directory, file, 'index.js');
        }

        return fs.readFileSync(file, 'utf8');
    }
    catch (error) {
        throw log.fail('Package not found', name);
    }
}
