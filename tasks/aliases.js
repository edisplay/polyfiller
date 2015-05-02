'use strict';

var tasks = {
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
    ],

    lint: [
        'jshint:lint'
    ],

    default: [ ]
};

if (process.env.TRAVIS) {
    tasks.test.push('coveralls:api');
}

module.exports = tasks;
