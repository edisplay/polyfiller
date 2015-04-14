'use strict';

import 'babelify/polyfill';
import fs from 'fs';
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
        let dependencies = details.dependencies(features);
            dependencies = options.exclude(dependencies);

        return dependencies.map((name) => {
            try {
                let config  = details.feature_info(name),
                    source  = details.resolve_path(`${name}/index.js`),
                    feature = { config, source: require(source) };

                if (callback) {
                    callback(feature, name, features);
                }

                return feature;
            }
            catch (error) {
                throw log.error('::list', {
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
            let result = [];

            options.catalog.forEach((path) => {
                result.push(...fs.readdirSync(path));
            });

            return result;
        }
        catch (error) {
            throw log.error('::list', {
                text: 'Failed to read the configuration file', error
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
