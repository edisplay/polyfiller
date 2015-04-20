'use strict';

export default {
    /**
     * flat_map
     *
     * @param {Array} list
     * @param {Function} predicate
     * @return {Array}
     */
    flat_map (list, predicate) {
        return Array.prototype.concat(...list.map(predicate));
    },

    /**
     * entries
     *
     * @param {Object} object
     * @return {Generator}
     */
     * entries (object) {
        for (let key of Object.keys(object)) {
            yield [key, object[key]];
        }
    },

    /**
     * mixin
     *
     * @param {Object} to
     * @param {Object} from
     * @return {Object}
     */
    mixin (to, from) {
        for (let [key, value] of this.entries(from || {})) {
            if (value) {
                if (Array.isArray(value)) {
                    to[key].push(...value);
                }
                else {
                    to[key] = value;
                }
            }
        }

        return to;
    },

    /**
     * uniq
     *
     * @param {Array} array
     * @return {Array}
     */
    uniq (array) {
        return array.filter((value, index, array) => {
            return array.indexOf(value) === index;
        });
    }
};
