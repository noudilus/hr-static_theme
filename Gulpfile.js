/**
 * Created by arnoudvandervelden on 27/07/15.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('styles', function(){
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('scripts', function(){
    gulp.src('scripts/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('app/scripts/'))
        .pipe(uglify())
        .pipe(gulp.dest('app/scripts/'))
});

gulp.task('html', function () {
    gulp.src('app/**/*.html')
        .pipe(connect.reload());
});

//Watch task
gulp.task('default', function(){
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('scripts/**/*.js', ['scripts']);
    gulp.watch(['app/**/*.html'], ['html']);

    connect.server({
        root: 'app',
        livereload: true
    })
});

