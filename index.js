'use strict';

import fs from 'fs';
import details from './trunk/details/index';
import log from './utils/log';
import env from './utils/env';

/** @class Polyfiller */
export default class Polyfiller {
    constructor (options) {
        env.set(options);
    }

    /**
     * Returns a bundle of polyfills as an array of object.
     *
     * @param {Array} features
     * @param {Function} [callback]
     * @returns {Array}
     */
    find (features, callback) {
        let dependencies = details.dependency_list(features);

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

            details.config.db.forEach((path) => {
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
        return details.wrapper(result.join(''));
    }

    toString () {
        //return `[Object ${new.target.name}]`;
    }
}
