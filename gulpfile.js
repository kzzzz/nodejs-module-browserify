var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('browserify', function () {
    gulp.src('src/js/app.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(rename('app.bundle.js'))
        .pipe(gulp.dest('src/js/'));
});

gulp.task('default', ['browserify']);