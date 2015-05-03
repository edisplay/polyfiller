'use strict';

import path from 'path';
import Details from '../../details';

let file = path.join(__dirname, './files/index.js');

let details = new Details,
    feature = details.load_feature(file);

export default feature;
