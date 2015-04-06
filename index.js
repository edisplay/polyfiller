'use strict';

import fs from 'fs';

import find_features from './trunk/find_features';
import features_list from './trunk/features_list';
import pack_sources from './trunk/pack_sources';
import env from './utils/env';

/** @class Polyfiller */
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
    find (...rest) {
        return find_features(...rest);
    }

    /**
     * Return a list of all the polyfills as an array of strings.
     *
     * @returns {Array}
     */
    list () {
        return features_list();
    }

    /**
     * Packs a list of polyfills into one string.
     *
     * @param {string} file
     * @returns {string}
     */
    pack (features) {
        return pack_sources(features);
    }
}
