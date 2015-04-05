'use strict';

module.exports = {
    build: [
        'babel:build'
    ],

    test: [
        'babel:build',
        'babel:tests',
        'mock',
        //'karma:unit',
        //'karma:client'
    ],

    lint: [
        'jshint:development'
    ],

    default: [ ]
};
