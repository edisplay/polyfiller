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
     * uniq
     *
     * @param {Array} array
     * @return {Array}
     */
    uniq (array) {
        return array.filter((value, index, array) => {
            return array.indexOf(value) === index;
        });
    },

    /**
     * options
     *
     * @param {Object} to
     * @param {Object} from
     * @return {Object}
     */
    options (to, from = {}) {
        let result = {};

        for (let [key, value] of this.entries(to)) {
            if (key in from) {
                let current = from[key];

                if (Array.isArray(current)) {
                    value = this.uniq(value.concat(current));
                }
                else {
                    value = current;
                }
            }

            result[key] = value;
        }

        return result;
    }
};
