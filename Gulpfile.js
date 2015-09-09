/**
 * Created by arnoudvandervelden on 27/07/15.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
});
