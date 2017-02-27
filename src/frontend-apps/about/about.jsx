'use strict';

var React = require('react');
require('./about.css');

/**
 * @class AboutApp
 * @extends ReactComponent
 */
class AboutApp extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
				<div className='AboutApp'>
					<h1>AboutApp</h1>

					<p>This is an app specific to the about page. (rendered on the client)</p>
					<p>If you edit any file that is bundled by webpack, webpack dev server will patch this page while preserving component state.</p>
				</div>
			);
	}
}

module.exports = AboutApp;
