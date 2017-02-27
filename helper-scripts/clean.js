'use strict';

var path = require('path');
var FileWriter = require('../build-tools/file-writer');
var config = require('../src/config/variables');

FileWriter.remove('.eslintignore');
FileWriter.remove('nodemon.json');
FileWriter.remove(path.relative(config.paths.root, path.join(config.paths.build, '*')));
