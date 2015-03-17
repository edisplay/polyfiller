/*!
 * Gruntfile
 */

'use strict';

var load = require('load-grunt-config')

module.exports = function (grunt) {
    var tasks = path.join(process.cwd(), 'tasks');

    load(grunt, {
        configPath: tasks(),
        jitGrunt: true
    });
};
