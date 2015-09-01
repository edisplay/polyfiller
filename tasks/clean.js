'use strict';

export default (grunt, options) => {
    return {
        cache: {
            src: [
                'npm-shrinkwrap.json',
                'npm-debug.log',
                'build',
                'cache'
            ]
        }
    };
};
