'use strict';

module.exports = {
    build: [
        'babel:build'
    ],

    test: [
        'build',
        'babel:tests',
        'mock:api',
        'mochaTest',
        //'karma:api'
    ],

    lint: [
        'jshint:development'
    ],

    default: [ ]
};
