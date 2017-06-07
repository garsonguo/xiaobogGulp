/**
 * Created by Administrator on 2017/2/16.
 */
var gulp=require('gulp');

var livereload=require('gulp-livereload');
var webserver=require('gulp-webserver');

gulp.task('webserver',function () {
    gulp.src('./')
        .pipe(webserver({
            livereload:true,
            open:true
        }))
})