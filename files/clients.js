'use strict';

/** @see https://saucelabs.com/platforms */
/** @see https://docs.saucelabs.com/reference/platforms-configurator */

module.exports = {
    chrome_win: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'Windows 8.1',
        version    : '42.0'
    },

    chrome_osx: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'OS X 10.10',
        version    : '41.0'
    },

    chrome_linux: {
        base       : 'SauceLabs',
        browserName: 'chrome',
        platform   : 'Linux',
        version    : '41.0'
    },

    safari_osx: {
        base       : 'SauceLabs',
        browserName: 'safari',
        platform   : 'OS X 10.10',
        version    : '8.0'
    },

    firefox_win: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'Windows 8.1',
        version    : '37.0'
    },

    firefox_osx: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'OS X 10.10',
        version    : '32.0'
    },

    firefox_linux: {
        base       : 'SauceLabs',
        browserName: 'firefox',
        platform   : 'Linux',
        version    : '37.0'
    },

    ie_9: {
        base       : 'SauceLabs',
        browserName: 'internet explorer',
        platform   : 'Windows 7',
        version    : '9.0'
    },

    ie_10: {
        base       : 'SauceLabs',
        browserName: 'internet explorer',
        platform   : 'Windows 8',
        version    : '10.0'
    },

    ie_11: {
        base       : 'SauceLabs',
        browserName: 'internet explorer',
        platform   : 'Windows 8.1',
        version    : '11.0'
    },

    iphone: {
        base       : 'SauceLabs',
        browserName: 'iphone',
        platform   : 'OS X 10.10',
        version    : '8.2'
    },

    ipad: {
        base       : 'SauceLabs',
        browserName: 'ipad',
        platform   : 'OS X 10.10',
        version    : '8.2'
    },

    android: {
        base       : 'SauceLabs',
        browserName: 'android',
        platform   : 'Linux',
        version    : '5.12'
    }
};