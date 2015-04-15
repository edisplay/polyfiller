'use strict';

import 'babelify/polyfill';
import options from './trunk/options';
import details from './trunk/details';
import storage from './trunk/storage/settings';
import log from './utils/log';

/** @class Polyfiller */
export default class Polyfiller {
    constructor (options) {
        storage.set(options);
    }

    /**
     * Returns a bundle of polyfills as an array of object.
     *
     * @param {Array} features
     * @param {Function} [callback]
     * @returns {Array}
     */
    find (features, callback) {
        let list = details.requested_features(features);

        return list.map((name) => {
            try {
                let feature = details.feature_bundle(name);

                if (callback) {
                    callback(feature, name, features);
                }

                return feature;
            }
            catch (error) {
                throw log.error('::find', {
                    text: 'Could not find the specified features', error
                });
            }
        });
    }

    /**
     * Return a list of all the polyfills as an array of strings.
     *
     * @returns {Array}
     */
    list () {
        try {
            let list = details.available_features();

            if (options.verbose) {
                log.info('Available features', { list });
            }

            return list;
        }
        catch (error) {
            throw log.error('::list', {
                text: 'Failed to get a list of the features', error
            });
        }
    }

    /**
     * Packs a list of polyfills into one string.
     *
     * @param {string} file
     * @returns {string}
     */
    pack (features) {
        let result = features.map(feature => feature.source);
        return options.wrapper(result.join(''));
    }

    /** https://github.com/babel/babel/issues/1088 */
    toString () {
        //return `[Object ${new.target.name}]`;
    }
}

var a = [];

console.log({ a }); // ReferenceError: list is not defined