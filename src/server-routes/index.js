'use strict';

const generalRoutes = require('./general-routes'); // routes that return files
const htmlRoutes = require('./html-routes'); // routes that return htmlPages
const apiRoutes = require('./api-routes'); // routes that return json or perform services

module.exports = generalRoutes.concat(htmlRoutes, apiRoutes);
