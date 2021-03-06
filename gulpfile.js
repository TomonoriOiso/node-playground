/*
    Gulp
*/
var 
    gulp = require('gulp'),
    mocha = require('gulp-mocha')
    gutil = require('gulp-util');


// coding gulpfile
gulp.task('watch-gulp', function () {
    gulp.watch('./gulpfile.js', function () {
        console.log('watch-gulp was fired');
    });
});


// Sample1
gulp.task('mocha', function () {
    return gulp.src('./002_mocha/**/*.js')
        .pipe(mocha({reporter: 'list'}))
        .on('error', gutil.log);
});
gulp.task('watch-mocha', function () {
    gulp.watch('./002_mocha/**/*.js', ['mocha']);
});


// Q
gulp.task('test-q', function () {
    return gulp.src('./006_q/*.js')
        .pipe(mocha({report: 'list'}))
        on('error', gutil.log);
});
gulp.task('watch-test-q', function () {
    gulp.watch('./006_q/*.js', ['test-q']);
});





