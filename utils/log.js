'use strict';

import winston from 'winston';
import winston_config from 'winston/lib/winston/config';
import format_list from './format_list';

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter (options) {
                let prefix = winston_config.colorize(options.level, '>> '),
                    meta = options.meta;

                if (options.level === 'error') {
                    let message = '';

                    if (meta.text) {
                        message = `  - ${meta.text}\n`;
                    }

                    try {
                        if (meta.error) {
                            message += `    \n${meta.error.stack}`;
                        }
                    }
                    catch (error) {}

                    return prefix + `[${options.message}]\n${message}`;
                }

                let message = prefix + options.message;

                if (meta.list) {
                    message = format_list(message, meta.list);
                }

                return message;
            }
        })
    ]
});

logger.on('logging', (transport, level) => {
    if (level === 'error') {
        process.exit(-1);
    }
});

export default logger;
