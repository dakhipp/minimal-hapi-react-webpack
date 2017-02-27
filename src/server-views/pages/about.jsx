'use strict';

var getWebpackAssets = require('../../../build-tools/get-webpack-assets');
var React = require('react');

var Nav = require('../components/nav');

var AboutPage = React.createClass({

	render: function () {
		return (
			<html>
				<head>
					<meta charSet='utf-8' />
					<title>About Page</title>
				</head>
				<body>
					<Nav />
					<p>This is the about page. (rendered on the server)</p>
					<p>You should see a simple about page only component below.</p>

					<p>{process.env.NODE_ENV}</p>

					<div id='aboutAppContainer'></div>

					<script src={getWebpackAssets().about.js}></script>
				</body>
			</html>
		);
	}
});

module.exports = AboutPage;
