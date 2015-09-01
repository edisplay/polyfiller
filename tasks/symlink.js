'use strict';

export default (grunt, options) => {
    return {
        options: {
            overwrite: true
        },

        build: {
            files: [
                {
                    expand: true,
                    cwd   : 'build',
                    src   : ['*'],
                    dest  : 'cache'
                }
            ]
        }
    };
};
