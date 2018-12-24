// 利用Express中的Router实现路由模块化
const express = require('express');
const _sql=require('./sql');
const bodyParser=require('body-parser')
let Router = express.Router();


// 传给前端要渲染的数据
Router.get('/',async(req,res)=>{
    // let {page,limit}=req.query;
    // console.log(page,limit);
    let qty=(req.query.limit)*1;
    let page=(req.query.page)*1;
    let index=(page-1)*qty;
    let sql=`select * from user order by id asc`;
    let sql2=`select * from user order by id asc limit ${index},${qty}`;
    let dataA=await _sql.query(sql);
    let dataB=await _sql.query(sql2);
    // console.log(dataA)
    console.log(dataA.data);
    let count=dataA.data.length;
    console.log(count);
    let data=  {"code": 0,
                "msg": "",
                "count": count,
                "data": dataB.data
        }
    
    res.send(data);
});


// 当行的增删改除
// RESTful风格api

Router.post('/',bodyParser.urlencoded({extended:false}),(req,res)=>{
    let body1=req.body;
    // console.log(body1);
    let id=body1.ids;
    // console.log(id);
    // console.log(body1._method);
    if(body1._method=='delete'){
        let sql=`delete from user where id=${id}`;
        // let dataA=await _sql.query(sql);
        // // console.log(dataA)
        // let data=  {"code": 0,
        //             "msg": "",
        //             "count": 15,
        //             // "data": dataA.data
        //     }
        
        //     // console.log(data);
        // res.send(data);

        // 使用promise中then和catch模块
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


    }else if(body1._method=='put'){
        let arr=JSON.parse(body1.data);
        // console.log(arr);
        // console.log(arr.username);
        // console.log(id);
        let sql=`update user set username='${arr.username}',password='${arr.password}',admin='${arr.admin}',sex='${arr.sex}',score=${arr.score},joinTime='${arr.joinTime}'  where id=${id}`;
        // let sql=`update from user where id=${id}`;
        // let dataA=await _sql.query(sql);
         _sql.query(sql).then(function(dataA){
// 数据库已给你更新
            
             if(dataA.status==1){
                let data=  {"code": 0,
                "msg": "ok",
                // "count": 15
                "data": dataA.data
                }
        
                res.send(data);
             }
         }).catch(function(dataA){
             console.log(dataA);
            res.send(dataA);
         });
        
    }else if(body1._method=='post'){
        console.log(body1.username);
       
        let sql=`INSERT INTO user (username,password,sex,score,joinTime) VALUES ('${body1.username}','${body1.password}','${body1.sex}',${body1.score},'${body1.time}')`;
        // res.send(body1);
        _sql.query(sql).then(function(dataD){
            let data=  {
                "code": 0,
                "msg": "",
                // count:
                "data":dataD
                }
                console.log(chenggong);
            res.send(dataD);
        }).catch(function(dataD){
            res.send(dataD);
        });

    }
   

    
   
});

Router.route('/:id')
    .get(async(req,res)=>{
        let sql=`select * from user`;
        let dataA=await _sql.query(sql);
        res.send({
            path:'获取商品信息',
            username:req.params.id
        })
    })

    .post((req,res)=>{
        res.send({
            path:'修改商品信息',
            username:req.params.id
        })
    })

    .put((req,res)=>{
        res.send({
            path:'添加商品',
            username:req.params.id
        })
    })
    .delete(async(req,res)=>{
        let id=req.body;
        console.log(id);
        let sql=`select * from user where id=$id`;
        let dataA=await _sql.query(sql);
        let data=  {"code": 0,
                "msg": "",
                "count": 15,
                "data": dataA.data
        }
        res.send({
            path:'删除商品',
            username:req.params.id
        })
    })


module.exports = Router;