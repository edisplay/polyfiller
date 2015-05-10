'use strict';

export default {
    options: {
        id: 'options',
        type: 'array',

        properties: {
            exclude: {
                type: 'array',

                items: {
                    type: 'string'
                }
            },

            catalog: {
                type: 'array',

                items: {
                    type: 'string'
                }
            },

            modules: {
                type: 'array',

                items: {
                    type: 'string'
                }
            },

            verbose: {
                type: 'boolean'
            },

            wrapper: {
                type: 'function'
            }
        }
    }
};
