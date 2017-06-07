/**
 * Created by Administrator on 2017/2/15.
 */
//gulp入口文件
    //引入依赖目录插件
var requireDir=require('require-dir');
//引入tasks里面的所有的任务（包括子目录下的任务）
requireDir('./gulp/tasks',{recurse:true});