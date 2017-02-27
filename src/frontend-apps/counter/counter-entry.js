'use strict';

var React = require('react'); // React must be in scope when using JSX because JSX is translated into React.createElement(...)
var ReactDOM = require('react-dom');
var Counter = require('./counter');

function counterApp () {
	ReactDOM.render(
		<Counter />,
		document.getElementById('counterAppContainer')
	);
}

document.addEventListener('DOMContentLoaded', counterApp);
