'use strict';

import wrapper from './wrapper';
import config from './config';
import load from './load';

/**
 * Returns a package bundle
 *
 * @param {string} directory
 * @param {string} name
 * @return {Object}
 */
export default (...rest) => {
    return { source: wrapper(load(...rest)), config: config(...rest) };
};
