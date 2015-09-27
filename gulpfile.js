var gulp = require('gulp');
var browserify = require('gulp-browserify');
var dustify = require('browserify-dustjs');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('script', function () {
    gulp.src('src/js/app.js')
        .pipe(browserify({
            transform: [dustify],
            insertGlobals: true,
            debug: true
        }))
        .pipe(uglify({mangle: false}))
        .pipe(rename('tasks-app.min.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['script', 'html']);