'use strict';

var resolve = require('resolve');
var log = require('../../utils/log');

try {
    module.exports = resolve.sync('text-encoding');
}
catch (error) {
    log.fail(error);
}
