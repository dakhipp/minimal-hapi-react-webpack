'use strict';

const config = require('../config/variables');

const devRoutes = [
	// Proxy webpack assets requests to webpack-dev-server
	// Note: in development webpack bundles are served from memory, not filesystem
	{
		method: 'GET',
		path: config.publicPaths.build + '{path*}', // this includes HMR patches, not just webpack bundle files
		handler: {
			proxy: {
				host: config.server.host,
				port: config.webpack.port,
				passThrough: true
			}
		}
	},
	// Note: We also make requests to Webpack Dev Server EventSource endpoint (typically /__webpack_hmr).
	// We don't need to proxy these requests because we configured webpack-hot-middleware
	// to request them directly from a webpack dev server URL in webpack-config.js

	// Enable a separate sandbox.
	// Use it to work on individual components outside of your application context.
	{
		method: 'GET',
		path: '/sandbox',
		handler: {
			view: 'pages/sandbox' // sandbox.jsx in /server-views/pages
		}
	}
];

module.exports = devRoutes;
