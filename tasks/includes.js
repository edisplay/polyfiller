'use strict';

export default (grunt, options) => {
    return {
        features: {
            options : {
                duplicates: false,
            },

            files: [
                {
                    cwd : './',
                    src : 'files/docs/index.md',
                    dest: 'README.md',
                }
            ]
        }
    };
};
