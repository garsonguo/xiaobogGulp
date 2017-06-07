/**
 * Created by Administrator on 2017/2/15.
 */
var src = './src';
var dest='./build';

module.exports = {
    less:{
        all:src+'/less/**/*.less',
        src:src+'/less/*.less',
        dest:dest+'/css',
        rev:dest+'/rev/css',
        settings:{                //编译less过程需要的配置，可以为空

        }
    },
    images:{
        src:src+'/images/**/*',
        dest:dest+'/img'
    },
    js:{
        src:src+'/js/**/*',
        dest:dest+'/js',
        rev:dest+'/rev/js'
    },
    clean:{
        dest:dest
    },
    rev:{
        revJson:dest+'/rev/**/*.json',
        src:"*.html",
        dest:''
    },
    common:{
        src:src+'/common/**/*',
        dest:dest+'/common'
    }
};
