'use strict';

var getWebpackAssets = require('../../../build-tools/get-webpack-assets');
var React = require('react');

var Nav = require('../components/nav');

var HomePage = React.createClass({

	render: function () {
		return (
			<html>
				<head>
					<meta charSet='utf-8' />
					<title>Home Page</title>
				</head>
				<body>
					<Nav />
					<p>This is the home page. (rendered on server)</p>
					<p>You should see a counter app below. It is only rendered to #counterAppContainer</p>

					<div id='counterAppContainer'></div>

					<script src={getWebpackAssets().counter.js}></script>
				</body>
			</html>
		);
	}
});

module.exports = HomePage;
