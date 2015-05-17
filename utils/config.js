'use strict';

import nconf from 'nconf';

nconf.use('file', {
    file: './config.json'
});

export default nconf.get.bind(nconf);
