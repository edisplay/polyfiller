'use strict';

import winston from 'winston';
import winston_config from 'winston/lib/winston/config';

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter (options) {
                let prefix = winston_config.colorize(options.level, '>> ');

                if (options.level == 'error') {
                    let meta = options.meta,
                        text = '';

                    if (meta.text) {
                        text = `  - ${meta.text}\n`;
                    }

                    try {
                        if (meta.error) {
                            text += `    \n${meta.error.stack}`;
                        }
                    }
                    catch (error) {}

                    return prefix + `[${options.message}]\n${text}`;
                }

                return prefix + options.message;
            }
        })
    ]
});

logger.on('logging', (transport, level) => {
    if (level == 'error') {
        process.exit(-1);
    }
});

export default logger;
