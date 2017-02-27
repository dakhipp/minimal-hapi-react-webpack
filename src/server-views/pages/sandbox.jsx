'use strict';

var getWebpackAssets = require('../../../build-tools/get-webpack-assets');
var React = require('react');

var Sandbox = React.createClass({

	render: function () {
		return (
			<html>
				<head>
					<meta charSet='utf-8' />
					<title>Sandbox</title>
				</head>
				<body>
					<p>This is the a sandbox page. (rendered on server)</p>
					<p>You'll be able to make edits to your sand component while it is isolated from all other pages and components.</p>
					<p>* This route should only exsist in development.</p>

					<div id='sandboxAppContainer'></div>

					<script src={getWebpackAssets().sandbox.js}></script>
				</body>
			</html>
		);
	}
});

module.exports = Sandbox;
