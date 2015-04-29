'use strict';

module.exports = {
    build: [
        'babel:build'
    ],

    test: [
        'build',
        'babel:tests',
        'mock:api',
        'benchmark:api',
        'mochaTest:api',
        'karma:api',
        //'karma:client'
    ],

    lint: [
        'jshint:development'
    ],

    default: [ ]
};
