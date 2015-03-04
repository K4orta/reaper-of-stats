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
	gulp.task('transpile', function(cb) {
		gulp.src(['src/**/*.js'])
		.pipe(babel({experimental: true}))
		.pipe(react())
		.pipe(gulp.dest('lib/'))
		.on("end", function() {
			cb(null);
		});
	});

	gulp.task('browserify', ['transpile'], function() {
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