'use strict';

module.exports = {
    build: [
        'babel:build'
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
        //'karma:client',
        'coveralls:api'
    ],

    lint: [
        'jshint:lint'
    ],

    default: [ ]
};
