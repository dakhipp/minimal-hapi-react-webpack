'use strict';

import React, {Component, PropTypes} from 'react';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';

var axios = require('axios');

var userSchema = require('../../shared-models/user');

class UserForm extends Component {
	constructor (props) {
		super(props);

		this.state = {
			user: {
				name: null,
				age: null,
			},
			submitted: false,
		};

		this.validatorTypes = userSchema;

		this.renderTopFeedback = this.renderTopFeedback.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	render () {
		return (
			<form onSubmit={this.onSubmit}>
				{this.renderTopFeedback(this.props.getValidationMessages())}
				<div>
					<label htmlFor='name'>Name:</label>
					<br />
					<input
						type='text'
						ref='name'
						placeholder='Enter Name'
						value={this.state.user.name}
						onChange={this.onChange('name')}
						onKeyUp={this.props.handleValidation('name')}
						/>
					<br />
					{this.renderHelpText(this.props.getValidationMessages('name'))}
				</div>
				<br />
				<div>
					<label htmlFor='age'>Age:</label>
					<br />
					<input
						type='text'
						ref='age'
						placeholder='Enter Age'
						value={this.state.user.age}
						onChange={this.onChange('age')}
						onKeyUp={this.props.handleValidation('age')}
						/>
					<br />
					{this.renderHelpText(this.props.getValidationMessages('age'))}
				</div>
				<br />
				<button type='submit'>Submit</button>
			</form>
		);
	}

	// updates submitted state and sends form data if no errors are found
	onSubmit (event) {
		event.preventDefault();

		this.setState({submitted: true});

		console.log(this.props.getValidationMessages().length);

		if (!this.props.getValidationMessages().length) {
			axios.post('/user', this.state.user);
		}
	}

	// updates state on field value change
	onChange (field) {
		return (event) => {
			let newObj = {};
			newObj[field] = event.target.value;
			this.setState({user: Object.assign(this.state.user, newObj)});
		};
	}

	// renders all messages in an array, only if the form has been submitted
	renderTopFeedback (messagesArray) {
		var html = messagesArray.map((val) => {
			if (this.state.submitted) {
				return (
					<span className={this.props.errors.length ? 'help-block' : 'success'}>{val}</span>
				);
			}
		});
		return html;
	}

	// renders single messages, usually near field
	renderHelpText (message) {
		return (
			<span className='help-block'>{message}</span>
    );
	}

	// tells validator which part of your state to validate
	getValidatorData () {
		return this.state.user;
	}
}

UserForm.propTypes = {
	errors: PropTypes.object,
	validate: PropTypes.func,
	isValid: PropTypes.func,
	handleValidation: PropTypes.func,
	getValidationMessages: PropTypes.func,
	clearValidations: PropTypes.func,
	submitted: PropTypes.bool,
};

module.exports = validation(strategy)(UserForm);
