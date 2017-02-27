'use strict';

var React = require('react'); // React must be in scope when using JSX because JSX is translated into React.createElement(...)
var ReactDOM = require('react-dom');
var About = require('./about');

function AboutApp () {
	ReactDOM.render(
		<About />,
		document.getElementById('aboutAppContainer')
	);
}

document.addEventListener('DOMContentLoaded', AboutApp);
