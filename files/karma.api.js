'use strict';

module.exports = function (config) {
    config.set({
        browsers  : ['PhantomJS'],
        reporters : ['mocha'],
    });
};
