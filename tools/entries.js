'use strict';

/**
 * Entries
 *
 * @param {Object} object
 * @return {Generator}
 */
export default function * (object) {
    for (let key of Object.keys(object)) {
        yield [key, object[key]];
    }
};

