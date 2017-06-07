/**
 * Created by Administrator on 2017/2/15.
 */
var gulp=require('gulp');
var less=require('gulp-less');
var plumber=require('gulp-plumber');//避免因错误而中断gulp
var notify=require('gulp-notify');//捕获错误，返回错误信息
var autoprefixer = require('gulp-autoprefixer');
var handleErrors=require('../util/handleErrors');
var config=require('../config').less;

//开发版本
gulp.task('less',function () {
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(less(config.settings))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .on('error',handleErrors)
        .pipe(gulp.dest(config.dest));
})


//发布版本
// var rev=require('gulp-rev');
// var minifycss = require('gulp-minify-css');
// var rename = require('gulp-rename');
// gulp.task('less',function () {
//     return gulp.src(config.src)
//         .pipe(plumber())
//         .pipe(less(config.settings))
//         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//         .pipe(rev())                                     //设置hash key
//         .pipe(gulp.dest(config.dest))
//         .pipe(rename({suffix:'.min'}))                 //重命名 增加min
//         .pipe(minifycss())                               //压缩css
//         .pipe(gulp.dest(config.dest))
//         .pipe(rev.manifest())                            //设置hash key json
//         .pipe(gulp.dest(config.rev))
// })