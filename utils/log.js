'use strict';

var util = require('util');

module.exports = {
    fail: function (error, message) {
        message = Array.prototype.slice.call(arguments, 1);
        error = util.format('\x1b[31m[%s]\x1b[0m\n -', error);

        console.log(error, message.join(' '));
        process.exit(1);
    }
};
