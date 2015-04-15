'use strict';

import path from 'path';
import Polyfiller from '../index';

export default {
    'find (empty)' () {
        let polyfiller = new Polyfiller;
        return polyfiller.find();
    },

    'find (one)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([ { name: 'Promise' } ]);
    },

    'find (one locally)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([ { name: 'URL' } ]);
    },

    'find (multiple)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([
            { name: 'Promise' },
            { name: 'EventSource'}
        ]);
    },

    'find (mixin)' () {
        let polyfiller = new Polyfiller;

        return polyfiller.find([
            { name: 'Promise' },
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

        return polyfiller.find([ { name: 'Promise' } ]);
    },

    'list (default)' () {
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

    'list (option.verbose)' () {
        let polyfiller = new Polyfiller({
            verbose: true
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
        let features = polyfiller.find([ { name: 'Promise' } ]);

        return polyfiller.pack(features);
    }
}

