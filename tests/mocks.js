'use strict';

import path from 'path';
import Polyfiller from '../index';

const polyfiller = new Polyfiller({
    exclude: ['setImmediate'],
    catalog: [path.resolve(__dirname, '../trunk/catalog')]
});

export default {
    'find': function () {//
        return polyfiller.find([ { name: 'Promise' } ]);
    },

    'list': function () {//
        return polyfiller.list();
    },

    'pack': function () {
        var features = polyfiller.find([ { name: 'Promise' } ]);

        return polyfiller.pack(features);
    }
}

