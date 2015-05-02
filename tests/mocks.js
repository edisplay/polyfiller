'use strict';

import path from 'path';
import Polyfiller from '../index';

export default {
    'toString' () {
        let polyfiller = new Polyfiller;

        return polyfiller.toString();
    },

    'find (empty)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find();
    },

    'find (npm feature)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([ 'Promise' ]);
    },

    'find (advanced format)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([ { name: 'Promise' } ]);
    },

    'find (mixed format)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([ { name: 'EventSource' }, 'URL' ]);
    },

    'find (callback)' () {
        let polyfiller = new Polyfiller;

        let callback = [];

        polyfiller.find([ { name: 'EventSource' }, 'URL' ],
            (bundle, name, features) => {
                callback.push({ bundle, name, features });
            });

        return callback;
    },

    'find (local feature)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([ 'URL' ]);
    },

    'find (npm + local)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([ 'EventSource', 'URL' ]);
    },

    'find (option.exclude)' () {
        let polyfiller = new Polyfiller({
            exclude: [ 'setImmediate' ],
        });

        return polyfiller.find([ 'Promise' ]);
    },

    'find (option.catalog)' () {
        let polyfiller = new Polyfiller({
            catalog: [
                path.resolve(__dirname, '../trunk/catalog')
            ],
        });

        return polyfiller.find([ 'Promise' ]);
    },

    'list (default)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.list();
    },

    'list (option.catalog)' () {
        let catalog = path.resolve(__dirname, '../trunk/catalog');

        let polyfiller = new Polyfiller({
            catalog: [ catalog ],
        });

        return polyfiller.list();
    },

    'list (option.exclude)' () {
        let polyfiller = new Polyfiller({
            exclude: [ 'Promise' ],
        });

        return polyfiller.list();
    },

    'pack (empty)' () {
        let polyfiller = new Polyfiller,
            features = polyfiller.find([ ]);

        return polyfiller.pack(features);
    },

    'pack (npm feature)' () {
        let polyfiller = new Polyfiller,
            features = polyfiller.find([ 'EventSource' ]);

        return polyfiller.pack(features);
    },

    'pack (default wrapper)' () {
        let polyfiller = new Polyfiller,
            features = polyfiller.find([ 'EventSource' ]);

        return polyfiller.pack(features);
    },

    'pack (custom wrapper)' () {
        let polyfiller = new Polyfiller({
            wrapper: function (source) {
                return `try { ${source} } catch (error) {}`
            }
        }),

        features = polyfiller.find([ 'EventSource' ]);

        return polyfiller.pack(features);
    }
};
