'use strict';

/**
 * Extends an object
 *
 * @param {Object} to
 * @param {Object} from
 */
export default function (to, from) {
    for (let key in from) {
        if (Object.prototype.hasOwnProperty.call(from, key)) {
            let value = from[key];

            if (value) {
                to[key] = value;
            }
        }
    }

    return to;
};
