'use strict';

export default (grunt, options) => {
    return {
        build: {
            development: {
                updateType: 'report',

                semver: true,

                packages: {
                    devDependencies: true,
                    dependencies   : true
                }
            }
        }
    };
};
