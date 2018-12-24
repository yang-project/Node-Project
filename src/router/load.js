const path=require('path');
const express = require('express');
const _sql=require('./sql');
const bodyParser=require('body-parser')
let Router = express.Router();
let multer=require('multer');


// 定义上传临时路径
// 如果无文件，则会自动创建
var storage=multer.diskStorage({
    destination:'uploads/',
    filename:function(req,file,cb){
        // console.log('file',file);
        
        let ext = path.extname(file.originalname);//.jpg,.png,.xx
        cb(null, file.fieldname + '-' + Date.now()+ext);
    }
});
let upload = multer({ dest: 'temp/',storage });
let url;
Router.post('/',upload.array('file',5),(req,res)=>{// upload/
    // // 通过req.files获取多文件信息
    // console.log(req.files);
    // console.log(req.files.length);
    
    url='../img/'+req.files[0].filename;
    console.log(url);
    // console.log('body:',req.body);
    // 写入数据库
    

    // 相应给前端的信息
    res.send({
        code:1,
        msg:'文件上传成功',
        data:req.files
    })
});

Router.post('/add',bodyParser.urlencoded({extended:false}),(req,res)=>{// upload/
    let body1=req.body;
    console.log(body1);
    var title=body1.title;
    var categroy=body1.categroy;
    var status=body1.status;
    var price=body1.price;
    var time=body1.time;
    var sql=`insert into goodlist (title,price,url,categroy, status,time) values ('${title}',${price},'${url}','${categroy}','${status}','${time}')`;
    _sql.query(sql).then(function(dataO){
        let data=  {
            "code": 0,
            "msg": "",
            // count:
            "data":dataO.data
            }
        
            console.log(data);
        res.send(data);
    }).catch(function(dataO){
        res.send(datadataO);
    });
    // res.send(body1);
    
});


module.exports = Router;