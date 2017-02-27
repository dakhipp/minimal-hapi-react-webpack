'use strict';

const userController = require('../server-controllers/user');
const userSchema = require('../shared-models/user');

const apiRoutes = [
	{
		method: 'GET',
		path: '/user',
		handler: userController.getUser,
	},
	{
		method: 'POST',
		path: '/user',
		config: {
			handler: userController.postUser,
			validate: {
				options: {
					abortEarly: false,
				},
				payload: userSchema,
			}
		}
	}
];

module.exports = apiRoutes;
