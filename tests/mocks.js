'use strict';

import Polyfiller from '../index';

const polyfiller = new Polyfiller;

export default {
    'find': function () {
        return polyfiller.find([
            {
                name: 'Promise',
                dependencies: true
            }
        ]);
    }
}
