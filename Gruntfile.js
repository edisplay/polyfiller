/*!
 * Gruntfile
 */

'use strict';

import path from 'path';
import load from 'load-grunt-config';
import time from 'time-grunt';

export default grunt => {
    let tasks = path.join(process.cwd(), 'tasks');

    time(grunt);

    load(grunt, {
        configPath: tasks,
        jitGrunt  : true,
    });
};
