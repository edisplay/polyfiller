'use strict';

import grunt from 'grunt';
import Polyfiller from '../index';
import deindent from '../tools/deindent';

let polyfiller = new Polyfiller,
    features = polyfiller.list(true).reverse();

let table = deindent`| Feature | What's included? | Type | License |
                     |:--------|:-----------------|:----:|:-------:|
`;

let icons = "https://github.com/Polyfiller/polyfiller/" +
    "blob/master/files/icons"

for (let feature of features) {
    let files = feature.files.map(file => {
        return `[${file.name}](${file.info})<br />`;
    });

    let types = feature.types.map(type => {
        return deindent `<img src="${icons}/${type}.png?raw=true" \
            alt="${type}" width="25" height="25" />`;
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
