/**
 * Created by Administrator on 2017/2/15.
 */
//默认任务
var gulp=require('gulp');

//开发版本
gulp.task('default',['webserver','less','common','js','images','watch']);

//发布版本
// gulp.task('default',['less','js','images','rev']);
