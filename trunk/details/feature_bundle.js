'use strict';

import resolve_path from './resolve_path';
import feature_info from './feature_info';

export default (name) => {
    let source = resolve_path(`${name}/index.js`);

    return {
        config: feature_info(name),
        source: require(source)
    };
};
