'use strict';

export default {
    /**
     * Provides a corrected list of features
     *
     * @returns {Array}
     */
    list (features) {
        return features.map(name => {
            return typeof name === 'string' ? { name } : name;
        });
    }
};
