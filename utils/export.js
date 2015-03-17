'use strict';

var path = require('path');
var fs = require('fs');

var log = require('./log');

module.exports = function (directory) {
    var build = {},
        files = fs.readdirSync(directory);

    files.forEach(function (file) {
        try {
            file = path.resolve(directory, file);
            build[file] = fs.readFileSync(file, 'utf8');
        }
        catch (error) {
            throw log.fail('File reading', error);
        }
    });

    return build;
};
