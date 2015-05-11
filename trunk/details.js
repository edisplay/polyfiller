'use strict';

import fs from 'fs';
import path from 'path';

import tsort from 'tsort';
import npm_resolve from 'resolve';
import bower_resolve from 'resolve-bower';

import utils from './utils';
import functional from './../tools/functional';
import log from './../utils/log';


const resolve = {
    npm  : npm_resolve,
    bower: bower_resolve
};

/** @class Details */
export default class Details {
    constructor (options) {
        this.options = options;
    }

    /**
     * An ordered list of requested features
     *
     * @param {Array} files
     * @returns {Array}
     */
    dependencies (features) {
        let graph = tsort();

        features.forEach((feature) => {
            let name = feature.name;

            if (!name) {
                throw log.error('dependencies', {
                    text: 'Could not find a property name for requested feature'
                });
            }

            graph.add(name, ...this.feature_info(name)
                .dependencies);
        });

        try {
            graph = graph.sort();
        }
        catch (error) {
            throw log.error('dependencies', {
                text: 'Unresolved dependency error', error
            });
        }

        return graph.reverse();
    }

    /**
     * Resolves a feature path
     *
     * @param {...string} file path
     * @returns {string}
     */
    resolve_path () {
        for (let location of this.options.catalog) {
            let file = path.resolve(location, ...arguments);

            try {
                if (fs.statSync(file)) {
                    return file;
                }
            }
            catch (error) {
                log.warn('resolve_path', {
                    text: 'Could not find the following file ' + file, error
                });
            }
        }
    }

    /**
     * Returns a feature info
     *
     * @param {string} feature
     * @return {Object}
     */
    feature_info (feature) {
        let config = this.resolve_path(feature, 'index.json');

        try {
            config = require(config);
        }
        catch (error) {
            throw log.error('feature_info', {
                error,
                text: `Requested feature <${feature}> not found in the catalog`
            });
        }

        return Object.assign({dependencies: []}, config);
    }

    /**
     * Returns a feature file
     *
     * @param {Array} data
     * @return {string}
     */
    load_feature (data) {
        for (let feature of data) {
            let file = null;

            try {
                switch (feature.type) {
                    case 'npm':
                    case 'bower':
                        try {
                            file = resolve[feature.type].sync(feature.name, {
                                paths: this.options.modules
                            });
                        }
                        catch (error) {
                            log.warn('load_feature', {
                                text: `Package not found "${feature.name}"`
                            });
                        }

                        break;

                    case 'file':
                        file = this.resolve_path(feature.name);
                        break;
                }

                if (file) {
                    return fs.readFileSync(file, 'utf8');
                }
            }
            catch (error) {
                throw log.error('load_feature', {
                    text: `Package not found "${feature.name}"`
                });
            }
        }
    }

    /**
     * Packs a and wraps list of polyfills into one string.
     *
     * @param {Array} features
     * @return {string}
     */
    pack_features (features) {
        let result = features.map(feature =>
            feature.source);

        return this.options.wrapper(result.join(''));
    }

    /**
     * Excludes specified features from the dependency list
     *
     * @param {Array} features
     * @returns {Array}
     */
    exclude_features (features, excluded) {
        return features.filter(value => !excluded.includes(value));
    }

    /**
     * A list of available features
     *
     * @returns {Array}
     */
    available_features () {
        let features = functional.flat_map(this.options.catalog, path => {
            return fs.readdirSync(path);
        });

        return this.requested_features(features);
    }

    /**
     * A list of requested features
     *
     * @param {Array} features
     * @returns {Array}
     */
    requested_features (features) {
        if (!Array.isArray(features)) {
            log.warn('You should specify the requested features\n');
        }
        else {
            let list = utils.list(features);
            list = this.dependencies(list);

            let files = {
                included: this.exclude_features(list, this.options.exclude),
                excluded: this.options.exclude
            };

            if (this.options.verbose) {
                for (let [title, file] of functional.entries(files)) {
                    log.info(title + ' files', {file});
                }
            }

            return files.included;
        }

        return [];
    }

    /**
     * Returns a requested feature
     *
     * @param {string} name
     * @returns {Object}
     */
    feature_bundle (name) {
        let feature = this.resolve_path(name);
        feature = require(feature);

        return {
            config: this.feature_info(name),
            source: this.load_feature(feature)
        };
    }
}
