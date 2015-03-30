'use strict';

var path    = require('path'),
    fs      = require('fs'),
    resolve = require('resolve');

var log = require('./log'),
    wrap = require('./wrap');

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
        var build = {
            file: path.resolve(options.path, file, 'index')
        };

        try {
            build.info = require(file + '.json');

            try {
                build.file = resolve.sync(build.info.name);
            }
            catch (error) { }

            build.file = wrap(fs.readFileSync(build.file + '.js', 'utf8'));
        }
        catch (error) {
            throw log.fail('The', file, 'polyfill was not found', error);
        }

        if (callback) {
            callback(build, file, files);
        }

        return build;
    });
};
