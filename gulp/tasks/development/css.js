/**
 * Created by Administrator on 2017/2/16.
 */
// 合并、压缩、重命名css(js同下   样例)
var gulp = require('gulp'),                    // 引入Gulp
     minifycss = require('gulp-minify-css'),    // css压缩
     concat = require('gulp-concat'),        // 文件合并
     rename = require('gulp-rename')        // 文件更名
var notify = require('gulp-notify');        // 提示信息

gulp.task('css',function () {
    gulp.src('./src/css/*.css')
        .pipe(concat(main.css))
        .pipe(gulp.dest('./dest/css'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./dest/css'))
        .pipe(notify({message:'css is ok'}))
})