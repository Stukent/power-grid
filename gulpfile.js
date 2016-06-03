var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Note, not working on Node 6.
gulp.task('build', function() {
  return gulp.src('src/power-grid.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});
