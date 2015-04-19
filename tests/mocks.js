'use strict';

import path from 'path';
import Polyfiller from '../index';

export default {
    'find (empty)' () {
        let polyfiller = new Polyfiller;
        return polyfiller.find();
    },

    'find (npm feature)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([ { name: 'Promise' } ]);
    },

    'find (local feature)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([ { name: 'URL' } ]);
    },

    'find (npm + local)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([
            { name: 'EventSource' },
            { name: 'URL'}
        ]);
    },

    'find (option.exclude)' () {
        let polyfiller = new Polyfiller({
            exclude: ['setImmediate'],
        });

        return polyfiller.find([ { name: 'Promise' } ]);
    },

    'find (option.catalog)' () {
        let polyfiller = new Polyfiller({
            catalog: [
                path.resolve(__dirname, '../trunk/catalog')
            ],
        });

        return polyfiller.find([ { name: 'Promise' } ]);
    },

    'find (option.verbose)' () {
            let polyfiller = new Polyfiller({
            verbose: true
        });

        return polyfiller.find([ { name: 'EventSource' } ]);
    },

    'list' () {
        let polyfiller = new Polyfiller;

        return polyfiller.list();
    },

    'list (option.catalog)' () {
        let polyfiller = new Polyfiller({
            catalog: [
                path.resolve(__dirname, '../trunk/catalog')
            ],
        });

        return polyfiller.list();
    },

    'list (option.exclude)' () {
        let polyfiller = new Polyfiller({
            exclude: [
                'setImmediate'
            ],
        });

        return polyfiller.list();
    },

    'pack' () {
        let polyfiller = new Polyfiller;
        let features = polyfiller.find([ { name: 'EventSource' } ]);

        return polyfiller.pack(features);
    }
};

