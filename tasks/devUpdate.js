/*!
 * tasks/devUpdate
 */

'use strict';

module.exports = function (grunt, options) {
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
