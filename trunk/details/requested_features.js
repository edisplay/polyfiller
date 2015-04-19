'use strict';

import dependencies from './dependencies';
import options from '../options';
import storage from '../storage/settings';
import entries from '../../tools/entries';
import log from '../../utils/log';

export default (features) => {
    if (!Array.isArray(features)) {
        log.warn('You should specify the requested features\n');
    }
    else {
        let list = dependencies(features),

        files = {
            included: options.exclude(list),
            excluded: storage.get('exclude')
        }

        if (options.verbose) {
            for (let [title, file] of entries(files)) {
                log.info(title + ' files', { file });
            }
        }

        return files.included;
    }

    return [];
};
