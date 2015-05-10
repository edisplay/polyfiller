/*!
 * Gruntfile
 */

'use strict';

var load = require('load-grunt-config'),
    path = require('path'),
    time = require('time-grunt');


module.exports = function (grunt) {
    var tasks = path.join(process.cwd(), 'tasks');

    time(grunt);

    load(grunt, {
        configPath: tasks,
        jitGrunt: true
    });
};
