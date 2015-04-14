'use strict';

import path from 'path';
import nconf from 'nconf';
import mixin from '../../tools/mixin';
import entries from '../../tools/entries';

let options = {
    catalog: [ path.join(__dirname, '../catalog') ],
    exclude: [ ]
};

nconf.use('file', {
    file: path.resolve('./cache/settings.json')
});

nconf.defaults(options);

export default {
    set (value) {
        let data = mixin(options, value);

        for (let [key, value] of entries(data)) {
            nconf.set('options', value);
        }

        nconf.save();
    },

    get (option) {
        return nconf.get(option);
    }
}
