'use strict';

import path from 'path';
import Details from '../../details';

const location = path.join(__dirname, './files/index.js');

export default (new Details).load_feature(location);
