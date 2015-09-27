var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var hbsfy = require('hbsfy');

gulp.task('browserify', function () {
    gulp.src('src/js/app.js')
        .pipe(browserify({
            transform: [hbsfy],
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

gulp.task('connect', function () {
    //connect.server({
    //    root: 'src',
    //    livereload: true
    //});
});

gulp.task('default', ['browserify', 'html', 'connect']);