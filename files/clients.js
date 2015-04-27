'use strict';

/** @see https://saucelabs.com/platforms */

module.exports = {
    sl_win_chrome: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'Windows 7',
        version    : '41'
    },

    sl_osx_chrome: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'OS X 10.10',
        version    : '41'
    },

    sl_lin_chrome: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'linux',
        version    : '41'
    },

    sl_osx_safari: {
        base       : 'SauceLabs',
        browserName: 'safari',
        platform   : 'OS X 10.10',
        version    : '8'
    },

    sl_win_firefox: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'Windows 8.1',
        version    : '37'
    },

    sl_osx_firefox: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'OS X 10.10',
        version    : '37'
    },

    sl_lin_firefox: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'linux',
        version    : '37'
    },

    sl_ios_safari: {
        base       : 'SauceLabs',
        browserName: 'iphone',
        platform   : 'OS X 10.9',
        version    : '8.2'
    },

    sl_ie_9: {
        base       : 'SauceLabs',
        browserName: 'internet explorer',
        platform   : 'Windows 7',
        version    : '9'
    },

    sl_ie_10: {
        base       : 'SauceLabs',
        browserName: 'internet explorer',
        platform   : 'Windows 8',
        version    : '10'
    },

    sl_ie_11: {
        base       : 'SauceLabs',
        browserName: 'internet explorer',
        platform   : 'Windows 8.1',
        version    : '11'
    }
};