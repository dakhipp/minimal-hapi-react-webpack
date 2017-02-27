'use strict';

const sanitizer = require('sanitizer');
const crypto = require('crypto');

/**
* Takes in an object, addes a unique random id property to it, and returns the same object.
*
* @param {Object} obj The object that you are going to add an id to and return.
* @return {Object} obj The retured object that now has a 'unique' id key added to it
*/
exports.addRandomIdentifier = function (obj) {
	obj.id = crypto.randomBytes(6).toString('hex');
	return obj;
};

/**
* Takes in an object, loops over the values, sanitizes the values, and returns the object.
*
*	** This will likely need updated with more complex data structures **
*
* @param {Object} obj Then sanitizes the object's values and returns it
* @returns {Object} obj Object with sanitized values
*/
exports.sanitizeAllValues = function (obj) {
	Object.keys(obj).map((key) => {
		obj[key] = sanitizer.escape(obj[key]);
	});
	return obj;
};
