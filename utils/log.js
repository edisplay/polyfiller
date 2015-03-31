'use strict';

export default {
    fail (error, ...message) {
        console.log(`\x1b[31m[${error}]\x1b[0m\n -'`, ...message);
        process.exit(1);
    }
};
