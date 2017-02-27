'use strict';

var React = require('react'); // React must be in scope when using JSX because JSX is translated into React.createElement(...)

require('./sandbox.css');

var FormTest = require('../components/user-form');

/**
 * @class Sandbox
 * @extends ReactComponent
 */
class Sandbox extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			counter: 0,
			test: 4,
		};

		this.incrementCounter = this.incrementCounter.bind(this);
		this.incrementTest = this.incrementTest.bind(this);
	}

	render () {
		return (
			<div className='Sandbox'>
				<FormTest />
				{/*
					<h1>I'm a Sandbond component! (rendered on client)</h1>
					<p>You can comment me out and work on any component you want outside of your normal page.</p>

					<p onClick={this.incrementCounter}>+ counter</p>
					<p onClick={this.incrementTest}>+ test</p>

					<pre>State: {JSON.stringify(this.state, null, 2)}</pre>
					<pre>Props: {JSON.stringify(this.props, null, 2)}</pre>
				*/}
			</div>
		);
	}

	incrementCounter () {
		super.setState({counter: this.state.counter + 1});
	}

	incrementTest () {
		super.setState({test: this.state.test + 1});
	}
}

module.exports = Sandbox;
