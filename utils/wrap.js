'use strict';

var util = require('util');

/**
 * @param {string} content
 * @returns {string}
 */
module.exports = function (content) {
    return util.format(';(' +
        'function () {' +
            '"use strict"; ' +
            '%s;' +
        '}.call(window));',
    content);
};