'use strict';

import env from '../utils/env';

/**
 * configuration file
 *
 * @returns {Object}
 */
export default {
    db: [ ...(env.get('custom_features') || []), 'db' ]
};
