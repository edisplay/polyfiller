/*!
 * tasks/babel
 */

'use strict';

module.exports = function (grunt, options) {
    return {
        options: {
            compact : false,
            comments: true,

            optional: [
                'spec.protoToAssign'
            ],
        },

        build: {
            files: [
                {
                    expand: true,
                    src   : ['index.js', '{utils,trunk}/**/*.js' ],
                    dest  : 'cache',
                }
            ]
        }
    };
};