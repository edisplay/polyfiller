'use strict';

export default {
    build: [
        'clean:cache',
        'babel:build',
        'symlink:build',
        'execute:features',
        'includes:features'
    ],

    init: [
        'git-hooks'
    ],

    test: [
        'build',
        //'jshint:lint',
        'babel:tests',
        'mock:api',
        //'benchmark:api',
        //'mochaTest:api',
        'mocha_istanbul:api',
        'karma:api',
    ],

    tunnel: [
        'coveralls:api',
        'karma:client'
    ],

    lint: [
        'jshint:lint'
    ],

    default: [ ]
};
