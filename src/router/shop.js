const express = require('express');
const _sql=require('./sql');
const bodyParser=require('body-parser')
let Router = express.Router();
// 传给前端要渲染的数据
Router.get('/',(req,res)=>{
    // 查找出数量和单价
    // let sql=
    // let sqlUpdate='update from shopcar set total='
    let sql1=`select * from shopcar`;
    var count;
    
    // let dataA=await _sql.query(sql1);
    _sql.query(sql1).then(function(dataO){
        // console.log(dataO);
        let str=JSON.stringify(dataO.data);
        // console.log(str);
        let arr=JSON.parse(str);
        count=arr.length;
        // console.log(arr);
        for(var i=0;i<arr.length;i++){
            let num=arr[i].num;
            let price=arr[i].price;
            let total=num*price;
            let id=arr[i].id;
            // console.log(num,price,total);
            let sql2=`update shopcar set total=${total} where id=${id}`;
            _sql.query(sql2).then(function(data){
            console.log(data);
            }).catch(function(data){
                console.log(data);
            })
        }


        let qty=(req.query.limit)*1;
        let page=(req.query.page)*1;
        let index=(page-1)*qty;
            let sql=`select * from shopcar limit ${index},${qty}`;
            _sql.query(sql).then(function(dataC){
                // let count=arr.length;
                console.log(count);
                let data=  {"code": 0,
                            "msg": "",
                            "count": count,
                            "data": dataC.data
            }
                res.send(data);
            });
        // })
    }).catch(function(dataO){
        res.send(dataO);
    })
    
    

    // let sql2=`update from shopcar set total=${total}`;
    // let dataB=await _sql.query(sql2);
    // let sql=`select * from shopcar`;
    // let dataC=await _sql.query(sql);

    // console.log(dataA)
    // console.log(dataA.data);
    
   
});


module.exports = Router;
