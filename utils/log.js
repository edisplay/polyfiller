'use strict';

import winston from 'winston';
import winston_config from 'winston/lib/winston/config';
import format_list from './format_list';

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter ({level, message, meta = {}}) {
                let prefix = winston_config.colorize(level, '>> ');

                if (level === 'error') {
                    let text = '';

                    if (meta.text) {
                        text = `  - ${meta.text}\n`;
                    }

                    try {
                        if (meta.error) {
                            text += `    \n${meta.error.stack}`;
                        }
                    }
                    catch (error) {}

                    return prefix + `[${message}]\n${text}`;
                }

                message = prefix + message;

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
