'use strict';

import tsort from 'tsort';
import feature_info from './feature_info';
import log from '../../utils/log';

/**
 * An ordered list of requested features
 *
 * @param {Array} files
 * @returns {Array}
 */
export default (features) => {
    let graph = tsort();

    features.forEach((feature) => {
        let name = feature.name;

        if (!name) {
            throw log.error('dependencies', {
                text: 'Could not found a property name  for requested feature' });
        }

        graph.add(name, ...feature_info(name)
            .dependencies);
    });

    try {
        graph = graph.sort();
    }
    catch (error) {
        throw log.error('dependencies', {
            text: 'Unresolved dependency error', error });
    }

    return graph.reverse();
};
