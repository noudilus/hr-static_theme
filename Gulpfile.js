/**
 * Created by arnoudvandervelden on 27/07/15.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concat = require('gulp-connect');
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
})

//Watch task
gulp.task('default', function(){
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('scripts/**/*.js', ['scripts']);
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});
