'use strict';

/*
 * Polyfills
 */
// require('babel/runtime');
require('babel/polyfill');

/*
 * Superagent promisification
 */
var Request = require('superagent').Request;

Request.prototype.exec = function() {
	var req = this;

	return new Promise (function(resolve, reject) {
		req.end(function(error, res) {
		if (error) return reject(error);
			resolve(res);
		});
	});
};