'use strict';

var React = require('react'); // React must be in scope when using JSX because JSX is translated into React.createElement(...)

require('./sandbox.css');

var FormTest = require('../components/user-form');

import {Container, Row, Col} from "react-bootstrap";

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

				<Container className="paper" style={style.paper}>
					<Row className="tabContainer" style={style.tabContainer}>
						<Col sm={4} gutterWidth={0} className="tab tabSelected">
							<p className="tabLabel" style={style.tabLabel}>Sign Documents</p>
						</Col>
						<Col sm={4} gutterWidth={0} className="tab">
							<p className="tabLabel" style={style.tabLabel}>Pay</p>
						</Col>
						<Col sm={4} gutterWidth={0} className="tab">
							<p className="tabLabel" style={style.tabLabel}>Dashboard</p>
						</Col>
					</Row>
				</Container>
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

const style = {
	paper: {
		width: '80%',
		margin: 'auto',
		boxShadow: '2px 2px 3px 0 hsla(205,5%,48%,.12)',
		maxWidth: '720px',
		border: '1px solid #dbe2e8',
		background: '#fff',
		padding: '1em',
	},
	tabContainer: {
		// display: 'flex',
		// justifyContent: 'space-between',
		textAlign: 'center',
	},
	// tabSelected: {
	// 	background: 'red',
	// },
	// tab: {
	// 	width: `${100 / 3}%`,
	// 	marginTop: '-1em',
	// 	marginLeft: '-1em',
	// 	marginRight: '-1em',
	// 	background: 'blue',
	// },
};

module.exports = Sandbox;
