/**
 * Created by Administrator on 2017/2/15.
 */
var gulp=require('gulp');
var imagemin=require('gulp-imagemin');
var notify=require('gulp-notify');//捕获错误，返回错误信息
var plumber=require('gulp-plumber');//避免因错误而中断gulp
var cache=require('gulp-cache');
var pngquant = require('imagemin-pngquant');
var handleErrors=require('../util/handleErrors');
var config=require('../config').images;

gulp.task('images',function () {
   return gulp.src(config.src)
        .pipe(plumber())
        .pipe(cache(imagemin({              //只压缩修改的图片，没有修改的图片直接从缓存文件读取
            progressive:true,              //无损压缩
            use:[pngquant()]                 //使用 pngquant 深度压缩 png 图片
        })))
       .on('error',handleErrors)
        .pipe(gulp.dest(config.dest));

})