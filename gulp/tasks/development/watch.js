/**
 * Created by Administrator on 2017/2/15.
 */
var gulp=require('gulp');
var watch=require('gulp-watch');
var config=require('../config');

gulp.task('watch',function () {
    //监听less文件源，有改变，运行less
    watch(config.less.all,function () {
        gulp.start('less')
    });
    
    watch(config.js.src,function () {
        gulp.start('js')
    })
    
    watch(config.images.src,function () {
        gulp.start('images')
    })

    watch(config.common.src,function () {
        gulp.start('common')
    })

})