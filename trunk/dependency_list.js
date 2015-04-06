'use strict';

import tsort from 'tsort';

import feature_info from './feature_info';
import log from '../utils/log';

/**
 * An ordered list of requested features
 *
 * @param {Array} files
 * @returns {Array}
 */
export default (features) => {
    let graph = tsort();

    features.forEach((file) => {
        let dependencies = [];

        if (file.dependencies) {
            let polyfill = feature_info(file.name);

            dependencies = polyfill.dependencies;
        }

        graph.add(file.name, ...dependencies);
    });

    try {
        graph = graph.sort();
    }
    catch (error) {
        throw log.fail('Unresolved dependency error', error);
    }

    return graph.reverse();
};
