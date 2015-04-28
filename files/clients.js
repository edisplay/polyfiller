'use strict';

/** @see https://saucelabs.com/platforms */

module.exports = {
    chrome_win: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'Windows 8.1',
        version    : '42'
    },

    chrome_osx: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'OS X Yosemite',
        version    : '41'
    },

    chrome_linux: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'linux',
        version    : '41'
    },

    safari_osx: {
        base       : 'SauceLabs',
        browserName: 'safari',
        platform   : 'OS X Yosemite',
        version    : '8'
    },

    firefox_win: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'Windows 8.1',
        version    : '37'
    },

    firefox_osx: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'OS X Yosemite',
        version    : '32'
    },

    firefox_linux: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'linux',
        version    : '37'
    },

    safari_ios: {
        base       : 'SauceLabs',
        browserName: 'iphone',
        platform   : 'ios',
        version    : '8.2'
    },

    ie_9: {
        base       : 'SauceLabs',
        browserName: 'internet explorer',
        platform   : 'Windows 7',
        version    : '9'
    },

    ie_10: {
        base       : 'SauceLabs',
        browserName: 'internet explorer',
        platform   : 'Windows 8',
        version    : '10'
    },

    ie_11: {
        base       : 'SauceLabs',
        browserName: 'internet explorer',
        platform   : 'Windows 8.1',
        version    : '11'
    }
};