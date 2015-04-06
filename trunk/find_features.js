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
    let features = dependency_list(features);

    return features.map((name) => {
        let config = feature_info(name);

        var file = {
            source: load_feature(name, config.name),
            config: config
        };

        if (callback) {
            callback(file, name, features);
        }

        return file;
    });
};
