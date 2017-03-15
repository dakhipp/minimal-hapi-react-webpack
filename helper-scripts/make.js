'use strict';

require('./clean');

require('./make-nginx-conf')();
require('./make-eslintignore')();
require('./make-nodemon-json')();
