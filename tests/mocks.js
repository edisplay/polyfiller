'use strict';

import path from 'path';
import Polyfiller from '../index';

const polyfiller = new Polyfiller({
    exclude: ['setImmediate'],
    catalog: [path.resolve(__dirname, '../trunk/catalog')],
    verbose: true
});

export default {
    'find' () {
        return polyfiller.find([ { name: 'Promise' } ]);
    },

    'list' () {
        return polyfiller.list();
    },

    'pack' () {
        var features = polyfiller.find([ { name: 'Promise' } ]);

        return polyfiller.pack(features);
    }
}

