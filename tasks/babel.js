'use strict';

module.exports = function (grunt, options) {
    return {
        options: {
            compact : false,
            comments: true,

            optional: [
                'spec.protoToAssign'
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
