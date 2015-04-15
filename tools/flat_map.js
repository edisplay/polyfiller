'use strict';

export default (list, predicate) => {
    return Array.prototype.concat(...list.map(predicate));
};
