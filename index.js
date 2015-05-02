'use strict';

import 'babelify/polyfill';
import Details from './trunk/details';
import options from './trunk/options';
import utils from './trunk/utils';
import functional from './tools/functional';
import log from './utils/log';

/** @class Polyfiller */
export default class Polyfiller {
    constructor () {
        this.options = functional
            .options(options, ...arguments);

        this.details = new Details(this.options);

        /** Provides a set of useful utilities */
        this.utils = utils;
    }

    /**
     * Returns a bundle of polyfills as an array of object.
     *
     * @param {Array} features
     * @param {Function} [callback]
     * @returns {Array}
     */
    find (features, callback) {
        let list = this.details.requested_features(features);

        return list.map((name) => {
            try {
                let feature = this.details.feature_bundle(name);

                if (callback) {
                    callback(feature, name, this.utils.list(features));
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
     * Return a list of all of available features as an array of strings.
     *
     * @returns {Array}
     */
    list () {
        try {
            let list = this.details.available_features();

            if (this.options.verbose) {
                log.info('Available features', { list });
            }

            return list;
        }
        catch (error) {
            throw log.error('::list', {
                text: 'Failed to get a list of requested features', error
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
        try {
            return this.details.pack_features(features);
        }
        catch (error) {
            throw log.error('::pack', {
                text: 'Failed to pack the features', error
            });
        }
    }

    toString () {
        return `[object ${this.constructor.name}]`;
    }
}
