'use strict';

import nconf from 'nconf';

nconf.use('file', { file: './config.json' });

export default {
    set: nconf.set.bind(nconf),
    get: nconf.get.bind(nconf)
};
