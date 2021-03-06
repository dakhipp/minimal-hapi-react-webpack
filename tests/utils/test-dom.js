'use strict';

var jsdom = require('jsdom').jsdom;

/**
 * @param {string} [markup] - custom HTML layout into which you'll be rendering your test components
 */
module.exports = (markup) => {
  // Idempotence: multiple calls to this function should not reset global objects
	if (typeof document !== 'undefined') {
		return;
	}

	// `global` is node.js global object, like `window` in a browser environment
	global.document = jsdom(markup || '<html><body></body></html>');
	global.window = document.defaultView;
	global.navigator = window.navigator;

  // Note: here we can add whatever browser globals the tests might need
  // e.g. global.HTMLElement = window.HTMLElement;
};
