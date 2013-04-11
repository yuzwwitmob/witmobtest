var fs=require("fs");
exports.upimage=function(req,res){
    console.log(req.headers);
    console.log(req.files);
    var tmp_path = req.files.file.path; // 获得文件的临时路径
    var target_path = './public/images/' +req.files.file.name;// 指定文件上传后的目录
    fs.rename(tmp_path, target_path, function(err) { // 移动文件
        if (err) throw err;
        fs.unlink(tmp_path, function() {// 删除临时文件夹文件,
            if (err) throw err;

        });
    });
    fs.readdir("./public/images/", function (err, files) {//读取文件夹下文件
        var count = files.length,
            results =new Array() ;
        files.forEach(function (filename) {
            fs.readFile(filename, function (data) {
                var tmpResult={};
                tmpResult["imageName"]=filename;
                tmpResult["imagePath"] = "images/"+filename;
                results[count-1]=tmpResult ;
                count--;
                if (count <= 0) {
                    console.log(results);
                    console.log(results[0].imageName);
                    res.send(results);

                }

            });
        });
    });


};
