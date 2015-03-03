'use strict';
var livereload = require('gulp-livereload'),
	nodemon = require('gulp-nodemon');

module.exports = function(gulp) {
	// Configs
	var BASE_DIR = 'public',
		STYLES_DIR = 'stylesheets',
		SRC_DIR = 'src',
		DIST_DIR = BASE_DIR + '/dist',
		VIEW_DIR = BASE_DIR + '/views';

	gulp.task('watch', function() {
		livereload.listen();
		gulp.watch(STYLES_DIR + '/**/*.less', ['less']);
		gulp.watch([VIEW_DIR + '/**/*.jade']).on('change', livereload.changed);
		gulp.watch([
			SRC_DIR + '/**/*.js'
		], ['transpile', 'browserify']);
		
		nodemon({
			script: 'index.js',
			watch: 'src'
		});

	});
};