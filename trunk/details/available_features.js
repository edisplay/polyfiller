'use strict';

import fs from 'fs';
import catalog from '../options/catalog';
import log from '../../utils/log';

export default () => {
    let features = [];

    for (let path of catalog) {
        try {
            features.push(...fs.readdirSync(path));
        }
        catch (error) {
            throw log.error('::list', {
                text: 'Failed to read requested catalog', error
            });
        }
    }

    return features;
}
