// -*- coding: utf-8 -*-

'use strict';

/*
 * Extends an object
 *
 * @param {Object} to
 * @param {Object} from
 */
module.exports = function (to, from) {
    for (var key in from) {
        if (Object.prototype.hasOwnProperty.call(from, key)) {
            var value = from[key];

            if (value) {
                to[key] = value;
            }
        }
    }

    return to;
};
