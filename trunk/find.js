'use strict';

import bundle from './bundle';

/**
 * find the files
 *
 * @param {string} directory
 * @param {Array} files
 * @param {Function} [callback]
 * @returns {Array}
 */
export default (directory, files, callback) => {
    return files.map((name) => {
        var build = bundle(directory, name);

        if (callback) {
            callback(build, name, files);
        }

        return build;
    });
};
