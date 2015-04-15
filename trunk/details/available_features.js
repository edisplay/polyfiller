'use strict';

import fs from 'fs';
import catalog from '../options/catalog';
import log from '../../utils/log';

export default function () {
    let result = [];

    for (let path of catalog) {
        try {
            result.push(...fs.readdirSync(path));
        }
        catch (error) {
            throw log.error('::list', {
                text: 'Failed to read requested catalog', error
            });
        }
    }

    return result;
}
