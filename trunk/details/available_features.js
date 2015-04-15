'use strict';

import fs from 'fs';
import catalog from '../options/catalog';
import flat_map from '../../tools/flat_map';
import log from '../../utils/log';

export default () => {
    try {
        return flat_map(catalog, path => fs.readdirSync(path));
    }
    catch (error) {
        throw log.error('::list', {
            text: 'Failed to read requested catalog', error
        });
    }
}
