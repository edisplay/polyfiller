/*!
 * Gruntfile
 */

'use strict';

var load = require('load-grunt-config'),
    path = require('path');

module.exports = function (grunt) {
    var tasks = path.join(process.cwd(), 'tasks');

    load(grunt, {
        configPath: tasks,
        jitGrunt: true
    });
};
