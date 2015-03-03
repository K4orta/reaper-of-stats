'use strict';
var babel = require('gulp-babel'),
	react = require('gulp-react');

var browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      gutil = require('gulp-util'),
      uglify = require('gulp-uglify'),
      livereload = require('gulp-livereload');


module.exports = function(gulp) {
	gulp.task('transpile', function() {
		gulp.src(['src/**/*.js'])
		.pipe(babel())
		.pipe(react())
		.pipe(gulp.dest('lib/'));

		browserify(['./lib/client/main.js'])
	      .bundle()
	      .pipe(source('main.js'))
	      // .pipe(buffer())
	      // .pipe(uglify())
	      .on("error", function (err) { console.log("Error : " + err.message); })
	      .pipe(gulp.dest('./public/scripts/'))
	      .pipe(livereload());
	});
};