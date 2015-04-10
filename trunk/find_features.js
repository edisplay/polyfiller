'use strict';

import feature_info from './feature_info';
import resolve_path from './resolve_path';
import dependency_list from './dependency_list';

/**
 * find the files
 *
 * @param {Array} features
 * @param {Function} [callback]
 * @returns {Array}
 */
export default (features, callback) => {
    let dependencies = dependency_list(features);

    return dependencies.map((name) => {
        let config = feature_info(name),
            source = resolve_path(`${name}/index.js`),

        feature = { config, source: require(source) };

        if (callback) {
            callback(feature, name, features);
        }

        return feature;
    });
};
