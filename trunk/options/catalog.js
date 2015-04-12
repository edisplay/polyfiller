'use strict';

import path from 'path';
import env from '../../utils/env';

/**
 * Working catalog
 *
 * @returns {Array}
 */
const catalog = [
    ...Array.from(env.get('catalog')),
    path.join(__dirname, '../../db')
];

export default catalog;
