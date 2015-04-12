'use strict';

import winston from 'winston';
import winston_config from 'winston/lib/winston/config';
import env from './env';

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter (options) {
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

                return `${winston_config.colorize(options.level,
                    options.level.toUpperCase())} [${options.message}]\n${text}`;
            }
        })
        //new (winston.transports.File)({
        //  level: 'error',
        //  filename: env.get('logs_file')
        //})
    ]
});

logger.on('logging', (transport, level) => {
    if (level == 'error') {
        process.exit(winston.config.syslog.levels[level]);
    }
});

export default logger;
