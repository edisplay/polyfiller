'use strict';

import path from 'path';
import env from '../../utils/env';

/**
 * Configuration file
 *
 * @returns {Object}
 */
export default {
    db: [
        ...(env.get('catalog') || []),
        path.join(__dirname, '../../db')
    ]
};
