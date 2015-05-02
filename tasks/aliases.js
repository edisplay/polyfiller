'use strict';

module.exports = {
    build: [
        'babel:build',
        'symlink:build'
    ],

    test: [
        'build',
        'jshint:lint',
        'babel:tests',
        'mock:api',
        //'benchmark:api',
        //'mochaTest:api',
        'mocha_istanbul:api',
        'karma:api',
    ],

    lint: [
        'jshint:lint'
    ],

    default: [ ]
};
