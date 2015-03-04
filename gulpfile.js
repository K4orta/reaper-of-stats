var gulp = require('gulp');

require('gulp-load')(gulp);
gulp.loadTasks(__dirname);

gulp.task('build', ['less', 'transpile', 'browserify']);

gulp.task('default', [
  'less',
  'transpile',
  'browserify',
  'watch'
]);
