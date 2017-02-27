'use strict';

const path = require('path');

const config = require('../config/variables');

// Serve all files from the assets directory
// Note: in production this also serves webpack bundles
const routes = [
	{
		method: 'GET',
		path: config.publicPaths.assets + '{path*}',
		handler: {
			directory: {
				path: config.paths.assets,
				index: false,
				listing: false,
				showHidden: false
			}
		}
	},
];

// Serve white-listed files from the webRoot directory
config.server.publicFiles.forEach((filename) => {
	routes.push({
		method: 'GET',
		path: '/' + filename,
		handler: {
			file: {
				path: path.join(config.paths.webRoot, filename),
			}
		}
	});
});

// Catch-all
routes.push({
	method: 'GET',
	path: '/{path*}',
	handler: (request, reply) => {
		reply('Hapi catch-all view for /' + encodeURIComponent(request.params.path));
	}
});

module.exports = routes;
