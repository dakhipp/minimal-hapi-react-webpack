'use strict';

// Perform babel transforms defined in .babelrc (ES6, JSX, etc.) on server-side code
// Note: the options in .babelrc are also used for client-side code
// because we use a babel loader in webpack config
require('babel-register');

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiReactViews = require('hapi-react-views');

const server = new Hapi.Server();

const routes = require('./server-routes');
const devRoutes = require('./server-routes/dev-routes');

const config = require('./config/variables');

server.connection({
	host: config.server.host,
	port: config.server.port
});

const plugins = [
	{register: Inert}, // enables serving static files (file and directory handlers)
	{register: Vision} // enables rendering views with custom engines (view handler)
];
// Enable proxying requests to webpack dev server (proxy handler)
if (process.env.NODE_ENV === 'development') {
	const H2o2 = require('h2o2');
	plugins.push({register: H2o2});
}

server.register(plugins, (err) => {
	if (err) {
		console.error(err);
		return;
	}

	// Set up server side react views using Vision
	server.views({
		engines: {jsx: HapiReactViews},
		path: config.paths.serverViews
	});

	// Note: only one route per will be used to fulfill a request.
	// In case of multiple routes matching the URL, the most "specific" route wins.
	// See http://hapijs.com/api#path-matching-order
	routes.map((routeObj) => {
		server.route(routeObj);
	});

	// DEV SETUP
	if (process.env.NODE_ENV === 'development') {
		devRoutes.map((routeObj) => {
			server.route(routeObj);
		});
	}

	server.start(() => {
		console.log('Hapi server started!');
	});
});
