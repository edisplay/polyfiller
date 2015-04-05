'use strict';

import fs from 'fs';

import find from './trunk/find';
import list from './trunk/list';
import extend from './utils/extend';

export default {
    /**
     * Returns a bundle of polyfills as an array of object.
     * The array structure is [ { string: file, object: info } ].
     *
     * @param {Array} features
     * @param {Object} [options]
     * @param {Function} [callback]
     * @returns {Array}
     */
    find (features, options, callback) {
        var config = extend({ path: 'db' }, options);

        return find(config.path,
            list(config.path, features), callback);
    },

    /**
     * Return a list of all the polyfills as an array of strings.
     * This list corresponds to directories in the /db directory
     *
     * @returns {Array}
     */
    list () {
        return fs.readdirSync('db');
    }
};
