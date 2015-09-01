'use strict';


export default (grunt, options) => {
    return {
        api: {
            src : [ 'cache/tests/timers.js' ],
            dest: 'cache/tests/timers.csv'
        }
    };
};
