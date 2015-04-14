'use strict';

import dependencies from './dependencies';
import exclude from '../options/exclude';

export default (features) => {
    return exclude(dependencies(features));
}
