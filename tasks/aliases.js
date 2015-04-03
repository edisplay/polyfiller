'use strict';

module.exports = {
    build: [
        'babel:build'
    ],

    test: [
        'karma:tests'
    ],

    lint: [
        'jshint:development'
    ],

    default: [ ]
};
