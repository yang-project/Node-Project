const express = require('express');
const _sql=require('./sql');
let Router = express.Router();

Router.get('/',async(req,res)=>{
    let sql=`select * from user`;
    let data=await _sql.query(sql);
    res.send(data);
   
});


// RESTful风格api
Router.route('/:id')
    .get((req,res)=>{
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

    .delete((req,res)=>{
        res.send({
            path:'删除商品',
            username:req.params.id
        })
    })


module.exports = Router;