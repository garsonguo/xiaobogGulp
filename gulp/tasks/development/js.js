/**
 * Created by Administrator on 2017/2/15.
 */

var gulp=require('gulp');
var notify=require('gulp-notify');//捕获错误，返回错误信息
var plumber=require('gulp-plumber');//避免因错误而中断gulp
var handleErrors=require('../util/handleErrors');
var config=require('../config').js;

//开发版本
gulp.task('js',function () {
   return gulp.src(config.src)
        .pipe(plumber())
       .on('error',handleErrors)
        .pipe(gulp.dest(config.dest))
})


//发布版本
// var rev=require('gulp-rev');
// var uglify=require('gulp-uglify');
// var rename = require('gulp-rename');
// gulp.task('js',function () {
//    return gulp.src(config.src)
//        .pipe(plumber())
//        .pipe(rev())                               //设置hash key
//        .pipe(gulp.dest(config.dest))
//        .pipe(rename({suffix:'.min'}))           //重命名  增加min
//        .pipe(uglify())                            //压缩js
//        .pipe(gulp.dest(config.dest))
//        .pipe(rev.manifest())                      //设置hash key json
//        .pipe(gulp.dest(config.rev))
// })