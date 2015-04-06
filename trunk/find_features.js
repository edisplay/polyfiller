'use strict';

import feature_info from './feature_info';
import load_feature from './load_feature';
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
        let info = feature_info(name),

        file = {
            source: load_feature(name, info.name),
            config: info
        };

        if (callback) {
            callback(file, name, features);
        }

        return file;
    });
};
