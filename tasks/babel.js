'use strict';

export default (grunt, options) => {
    return {
        options: {
            compact : false,
            comments: true,

            optional: [
                'spec.protoToAssign',
                'runtime'
            ],

            ignore: ['**/*.json']
        },

        build: {
            files: [
                {
                    expand: true,
                    src   : ['index.js', '{utils,trunk,tools}/**/*.{js,json}' ],
                    dest  : 'build',
                }
            ]
        },

        tests: {
            files: [
                {
                    expand: true,
                    src   : ['tests/**/*.js' ],
                    dest  : 'cache',
                }
            ]
        }
    };
};
