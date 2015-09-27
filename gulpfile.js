var gulp = require('gulp');
var browserify = require('gulp-browserify');
var dustify = require('browserify-dustjs');
var rename = require('gulp-rename');

gulp.task('script', function () {
    gulp.src('src/js/app.js')
        .pipe(browserify({
            transform: [dustify],
            insertGlobals: true,
            debug: true
        }))
        .pipe(rename('app.bundle.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['script', 'html']);