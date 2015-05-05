'use strict';

import grunt from 'grunt';
import Polyfiller from '../index';
import deindent from '../tools/deindent';

let polyfiller = new Polyfiller,
    features = polyfiller.list(true).reverse();

let table = deindent`| Feature | What's included? | Type | License |
                     |:--------|:-----------------|:-----|:------- |
`;

for (let feature of features) {
    let files = feature.files.map(file => {
        return `[${file.name}](${file.info})<br />`;
    });

    let types = feature.types.map(type => {
        if (type !== 'proposal') {
            return deindent `<img src="../blob/master/files/logos/${type}.png?raw=true" \
                alt="${type}" width="25" height="25" />`;
        }

        return type;
    });

    let licenses = feature.licenses.map(license => {
        return license.type;
    });

    table += deindent`| \
        ${feature.name} | \
        ${files.join('')} | \
        ${types.join(' ')} | \
        ${licenses.join(', ')} |
    `;
}

grunt.file.write('./files/docs/catalog.md', table);
