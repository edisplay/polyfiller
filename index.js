'use strict';

var path = require('path'),
    read = require('./utils/export');

var db = path.join.bind(null, './db/');
var fs = require('fs');

module.exports = {
    get: function (name) {
        return read(db(name));
    },

    list: function () {
        return fs.readdirSync(db());
    },

    filter: function () {

    }
};