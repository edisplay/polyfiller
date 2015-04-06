'use strict';

import fs from 'fs';

import find_features from './trunk/find_features';
import wrapper from './trunk/wrapper';
import env from './utils/env';

/** @exports Polyfiller */
export default class Polyfiller {
    constructor (options) {
        env.set(options);
    }

    /**
     * Returns a bundle of polyfills as an array of object.
     * The array structure is [ { string: file, object: info } ].
     *
     * @param {Array} features
     * @param {Function} [callback]
     * @returns {Array}
     */
    find () {
        return find_features(...arguments);
    }

    /**
     * Return a list of all the polyfills as an array of strings.
     * This list corresponds to directories in the /db directory
     *
     * @returns {Array}
     */
    list () {
        return fs.readdirSync('db');
    }

    /**
     * Packs a list of polyfills into one string.
     *
     * @returns {string}
     */
    pack (array) {
        let result = '';

        array.forEach((feature) =>
            result += feature.source);

        return wrapper(result);
    }
}
