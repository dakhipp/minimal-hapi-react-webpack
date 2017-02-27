'use strict';

const generalHelper = require('../server-helpers/general-helpers');

exports.getUser = function (request, reply) {
	reply({
		user: 'dakota',
		age: 25
	});
};

exports.postUser = function (request, reply) {
	var data = generalHelper.sanitizeAllValues(request.payload);

	reply({
		user: data.user,
		age: data.age
	});
};
