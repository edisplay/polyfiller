'use strict';

import path from 'path';
import Details from '../../details';

const file = path.join(__dirname, './files/index.js');

export default (new Details).load_feature(file);
