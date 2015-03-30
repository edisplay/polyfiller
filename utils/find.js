'use strict';

var path = require('path');
var fs = require('fs');

var resolve = require('resolve');
var log = require('./log');

/**
 * find the files
 *
 * @param {Array} files
 * @param {Object} [options]
 * @param {Function} [callback]
 * @returns {Array}
 */
module.exports = function (files, options, callback) {
    return files.map(function (file) {
        var build = {};

        file = path.resolve(options.path, file, 'index');

        try {
            build.info = require(file + '.json');
        }
        catch (error) {
            throw log.fail('Info file reading', error);
        }

        try {
            build.file = resolve.sync(build.info.name);
        }
        catch (error) { }

        try {
            build.file = fs.readFileSync(build.file || file + '.js', 'utf8');
        }
        catch (error) {
            throw log.fail('Source file reading', error);
        }

        if (callback) {
            callback(build, file, files);
        }

        return build;
    });
};
