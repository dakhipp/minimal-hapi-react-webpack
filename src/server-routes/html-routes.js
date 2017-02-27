'use strict';

const htmlRoutes = [
	{
		method: 'GET',
		path: '/',
		handler: {
			view: 'pages/home' // index.jsx in /server-views/pages
		}
	},
	{
		method: 'GET',
		path: '/about',
		handler: {
			view: 'pages/about' // about.jsx in /server-views/pages
		}
	}
];

module.exports = htmlRoutes;
