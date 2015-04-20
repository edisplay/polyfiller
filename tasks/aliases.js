'use strict';

module.exports = {
    build: [
        'babel:build'
    ],

    test: [
        'babel:build',
        'babel:tests',
        'mock:api',
        'karma:api'
    ],

    lint: [
        'jshint:development'
    ],

    default: [ ]
};
