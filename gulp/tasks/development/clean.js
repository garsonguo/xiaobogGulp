/**
 * Created by Administrator on 2017/2/15.
 */
var gulp=require('gulp');
var clean=require('gulp-clean');
var config=require('../config').clean;


gulp.task('clean',function () {
    return gulp.src(config.dest)
        .pipe(clean())
})