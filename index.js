'use strict';

var fs = require('fs'),
    path = require('path');

var find = require('./utils/find');
var extend = require('./utils/extend');

module.exports = {
    /**
     * Returns a bundle of polyfills as an array of object.
     * The array structure is [ { string: file, object: info } ].
     *
     * @see find
     */
    find: function (files, options, callback) {
        return find(files, extend({path: 'db'}, options), callback);
    },

    /**
     * Return a list of all the polyfills as an array of strings.
     * This list corresponds to directories in the /db directory
     *
     * @returns {Array}
     */
    list: function () {
        return fs.readdirSync('db');
    }
};
