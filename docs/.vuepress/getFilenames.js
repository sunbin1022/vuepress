/**
 * 获取一个目录下的所有文件名
 */

const fs = require('fs');
const path = require("path")
// 排除检查的文件
var excludes = ['.DS_Store']

var filehelper = {
    getFileName:function(rpath) {
        const dirname=path.basename(rpath)
        let filenames = [];
        fs.readdirSync(rpath).forEach(file => {
            if (excludes.indexOf(file) < 0 ) {
                fullpath = rpath+"/"+file
                var fileinfo = fs.statSync(fullpath)
                if(fileinfo.isFile()){
                    if (file === 'README.md') {
                        file = '/pages/'+dirname+'/';
                    } else {
                        file = file.replace('.md','');
                        file ='/pages/'+dirname+'/'+file;
                    }
                    filenames.push(file);
                }
            }
        })
        filenames.sort(); // 排序
        return filenames;
    }
}
module.exports = filehelper;