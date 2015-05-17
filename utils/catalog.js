'use strict';

import grunt from 'grunt';
import Polyfiller from '../index';
import functional from '../tools/functional';
import deindent from '../tools/deindent';
import config from './config';

let table = deindent`| Feature | What's included? | Type | License |
                     |:--------|:-----------------|:----:|:-------:|
`;

let body = {
    'Feature' (feature) {
        return `[${feature.name}](${feature.repository.url})`;
    },

    'What\'s included?' (feature) {
        let files = feature.files.map(file => {
            return `[${file.name}](${file.info})<br />`;
        });

        return files.join('');
    },

    'Type' (feature) {
        let icons = config('repository') +
            '/blob/master/files/icons/type/25x25';

        let types = feature.types.map(type => {
            return deindent `<img src="${icons}/${type}.png?raw=true" \
                alt="${type}" width="25" height="25" />`;
        });

        return types.join(' ');
    },

    'License' (feature) {
        let licenses = feature.licenses.map(license => {
            return license.type;
        });

        return licenses.join(', ');
    }
}

let polyfiller = new Polyfiller,
    features = polyfiller.list(true);

for (let feature of features.reverse()) {
    for (let [name, value] of functional.entries(body)) {
        table += `${value(feature)} | `;
    }

    table += '\n';
}

grunt.file.write('./files/docs/catalog.md', table);
