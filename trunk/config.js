'use strict';

import path from 'path';
import env from '../utils/env';

/**
 * configuration file
 *
 * @returns {Object}
 */
export default {
    db: [
        ...(env.get('custom_features') || []),
        path.join(path.dirname(__dirname), 'db')
    ]
};
