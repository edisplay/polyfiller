'use strict';

import dependencies from './dependencies';
import options from '../options';
import storage from '../storage/settings';
import entries from '../../tools/entries';
import log from '../../utils/log';

export default (features) => {
    let files = {
        included: options.exclude(dependencies(features)),
        excluded: storage.get('exclude')
    }

    if (options.verbose) {
        for (let [key, value] of entries(files)) {
            log.info('%s files:\n — %s\n', key, value.join('\n — '));
        }
    }

    return files.included;
}
