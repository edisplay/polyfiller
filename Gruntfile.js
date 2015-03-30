/*!
 * Gruntfile
 */

'use strict';

var path = require('load-grunt-config'),
    load = require('path');

module.exports = function (grunt) {
    var tasks = path.join(process.cwd(), 'tasks');

    load(grunt, {
        configPath: tasks(),
        jitGrunt: true
    });
};
