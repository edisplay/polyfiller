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
    return files.map((file) => {
        var build = bundle(directory, file);

        if (callback) {
            callback(build, file, files);
        }

        return build;
    });
};
