var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var rename = require('gulp-rename');

gulp.task('build', function() {
  return gulp.src('src/power-grid.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(rename('power-grid.min.js'))
    .pipe(gulp.dest('build'));
});
