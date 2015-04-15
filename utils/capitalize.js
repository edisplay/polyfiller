'use strict';

export default (text) => {
    return text.replace(/^./, match => match.toUpperCase());
};