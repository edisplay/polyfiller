'use strict';

import tsort from 'tsort';
import config from './config';
import log from '../utils/log';

/**
 * A list of requested features
 *
 * @param {string} directory
 * @param {Array} files
 * @returns {Array}
 */
export default (directory, files) => {
    var graph = tsort();

    files.forEach((file) => {
        var dependencies = [];

        if (file.dependencies) {
            var feature = config(directory, file.name);
            dependencies = feature.dependencies;
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
