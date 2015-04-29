'use strict';

/** @see https://saucelabs.com/platforms */
/** @see https://docs.saucelabs.com/reference/platforms-configurator */

module.exports = {
    chrome_win: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'Windows 7',
        version    : '41'
    },

/*
    chrome_osx: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'OS X 10.10',
        version    : '41'
    },

    chrome_linux: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'Linux',
        version    : '41'
    },
*/

    safari_osx: {
        base       : 'SauceLabs',
        browserName: 'safari',
        platform   : 'OS X 10.10',
        version    : '8'
    },

    firefox_win: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'Windows 7',
        version    : '37'
    },

/*
    firefox_osx: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'OS X 10.10',
        version    : '32'
    },

    firefox_linux: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'Linux',
        version    : '37'
    },
*/

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
    },

    iphone: {
        base       : 'SauceLabs',
        browserName: 'iphone',
        platform   : 'OS X 10.9',
        version    : '8.1'
    },

/*
    ipad: {
        base       : 'SauceLabs',
        browserName: 'ipad',
        platform   : 'OS X 10.10',
        version    : '8.2'
    },
*/

    android: {
        base       : 'SauceLabs',
        browserName: 'android',
        platform   : 'Linux',
        version    : '4.2'
    }
};