'use strict';

var fs = require('fs');

module.exports = function (path) {
    return fs.readdirSync(path);
};
