/**
 * Created by Administrator on 2017/2/21.
 */
var gulp=require('gulp');
var plumber=require('gulp-plumber');
var handleErrors=require('../util/handleErrors');
var config=require('../config').common;

gulp.task('common',function () {
    return gulp.src(config.src)
        .pipe(plumber())
        .on('error',handleErrors)
        .pipe(gulp.dest(config.dest))
})