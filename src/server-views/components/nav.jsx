'use strict';

var React = require('react');

var Nav = React.createClass({

	render: function () {
		return (
			<div>
				<a href='/'>Home</a>
				<a href='about'>About</a>
			</div>
		);
	}
});

module.exports = Nav;
