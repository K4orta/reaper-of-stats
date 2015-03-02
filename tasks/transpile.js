'use strict';
var babel = require('gulp-babel'),
	react = require('gulp-react');

module.exports = function(gulp) {
	gulp.task('transpile', function() {
		gulp.src(['src/**/*.js'])
		.pipe(babel())
		.pipe(react())
		.pipe(gulp.dest('lib/'));
	});
};