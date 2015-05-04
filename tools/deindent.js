'use strict';

// Template string helper for deindentation
export default (state, ...template) => {
    let format = text => {
        let size = -1;

        return text.replace(/\n(\s+)/g, (text, match) => {
            if (size < 0) {
                size = match.replace(/\t/g, '    ').length;
            }

            let value = Math.min(match.length, size);

            return '\n' + match.slice(value);
        });
    };

    if (typeof state === 'string') {
        return format(state);
    }
    else if (typeof state === 'function') {
        return function () {
            return format(state(...arguments));
        };
    }

    let output = state.slice(0, template.length + 1);

    output = output.map((text, i) =>
        (i === 0 ? '' : template[i - 1]) + text);

    return format(output.join(''));
};
