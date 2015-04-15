'use strict';

import path from 'path';
import nconf from 'nconf';
import mixin from '../../tools/mixin';
import entries from '../../tools/entries';

let options = {
    catalog: [ path.join(__dirname, '../catalog') ],
    verbose: false,
    exclude: [ ]
};

nconf.use('file', {
    file: path.resolve('./cache/settings.json')
});

nconf.defaults(options);

export default {
    /**
     * Sets the specified values
     *
     * @param {Object} values
     */
    set (values) {
        if (values) {
            let data = mixin(options, values);

            for (let [key, value] of entries(data)) {
                nconf.set(key, value);
            }
        }

        nconf.save();
    },

    /**
     * Gets the specified values
     *
     * @param {string} option
     */
    get (option) {
        return nconf.get(option);
    }
}
