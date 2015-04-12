'use strict';

import Polyfiller from '../index';

const polyfiller = new Polyfiller({exclude: ['setImmediate']});

export default {
    'find': function () {
        return polyfiller.find([
            {
                name: 'Promise',
                dependencies: true
            }
        ]);
    },

    'list': function () {
        return polyfiller.list();
    },

    'pack': function () {
        var features = polyfiller.find([
            {
                name: 'Promise',
                dependencies: true
            }
        ]);

        return polyfiller.pack(features);
    }
}

