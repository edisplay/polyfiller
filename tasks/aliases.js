'use strict';

module.exports = {
    build: [
        'babel:build'
    ],

    test: [
        'build',
        'babel:tests',
        'mock:api',
        'mochaTest:api',
        'karma:api'
    ],

    lint: [
        'jshint:development'
    ],

    default: [ ]
};
