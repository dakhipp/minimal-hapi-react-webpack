'use strict';

const Joi = require('joi');

const userSchema = Joi.object().keys({
	name: Joi.string().min(3).max(30).required().label('Name'),
	age: Joi.number().min(1).max(150).required().label('Age'),
});

module.exports = userSchema;
