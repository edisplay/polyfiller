'use strict';

import capitalize from './capitalize';

export default (title, list) => {
    return `${capitalize(title)}:\n — ${list.join('\n — ')}\n`;
};
