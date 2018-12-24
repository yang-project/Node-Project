const express = require('express');
const _sql=require('./sql');
const bodyParser=require('body-parser')
let Router = express.Router();
let count;
Router.get('/',async(req,res)=>{
    // let qty=req.query;
    // console.log(req.query);
    // let title=body1.title;
    // let categroy=body1.categroy;
    let qty=(req.query.limit)*1;
    let page=(req.query.page)*1;
    let index=(page-1)*qty;
    let id='';
    let sql;

    let sql2=`SELECT * FROM goodlist order by id asc`;
   
    let dataA=await _sql.query(sql2);
    // let dataB=await _sql.query(sql2);
    var count=dataA.data.length;
    if(req.query.title&&req.query.categroy){
       var  title=req.query.title;
       var  categroy=req.query.categroy;
         sql=`SELECT * FROM goodlist WHERE title LIKE '%${title}%' and categroy='${categroy}'`;
    }else{
        sql=`select * from goodlist limit ${index},${qty} `;
    }
    // id=' where id in()'+req.query.fen
    // else

   
    // let sql1=`select * from goodlist`;
    let dataB=await _sql.query(sql);
    let data=  {"code": 0,
                "msg": "",
                "count": count,
                "data": dataB.data
                
        }
        console.log(data);
    res.send(data);
   
});


Router.post('/',bodyParser.urlencoded({extended:false}),(req,res)=>{
    let body1=req.body;
    // console.log(body1);
    let id=body1.ids;
    // console.log(id);
    if(body1._method=='delete'){
        let sql=`delete from goodlist where id=${id}`;
        
        _sql.query(sql).then(function(dataO){
            let data=  {
                "code": 0,
                "msg": "",
                count:count,
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
        let sql=`update goodlist set title='${arr.title}',price=${arr.price},url='${arr.url}',categroy='${arr.categroy}',time='${arr.time}',status='${arr.status}' where id=${id}`;
         _sql.query(sql).then(function(dataA){
// 数据库已给你更新
            console.log(dataA);
             if(dataA.status==1){
                let data=  {"code": 0,
                "msg": "ok",
                "count": count,
                "data": dataA.data
                }
        
                res.send(data);
             }
         }).catch(function(dataA){
            //  console.log(dataA);
            res.send(dataA);
         });
        
    }else if(body1._method=='up'){
        let sql=`update  goodlist set status='1' where id=${id}`;
        // let data;
        _sql.query(sql).then(function(dataD){
                let data={
                        "code": 0,
                        "msg": "",
                        count:count,
                        "data":dataD
                        }
                        
                    res.send(dataD);
                }).catch(function(dataD){
                    res.send(dataD);
                 });
    }else if(body1._method=='down'){
            let sql=`update  goodlist set status='0' where id=${id}`;
            // let data;
            _sql.query(sql).then(function(dataD){
                    let data={
                            "code": 0,
                            "msg": "",
                            // count:
                            "data":dataD
                            }
                            
                        res.send(dataD);
                    }).catch(function(dataD){
                        res.send(dataD);
                     });
    }else if(body1._method=='deletes'){
        console.log(id);
        let sql=`delete from goodlist where id  in (${id})`;
        // delete from table where id in (1,2,3...)
        
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
            res.send(dataO);
        });


    }else if(body1._method=='selectAll'){
        // console.log(body1);
        let sql=`select categroy from goodlist`;
        _sql.query(sql).then(function(dataO){
            let data= JSON.stringify(dataO.data);
            let arr=JSON.parse(data);
            var rs=arr.map(function(item){
                return item.categroy;
            });
            // 查重
            var arr2=[];
            for(var i=0;i<rs.length;i++){
                if(arr2.indexOf(rs[i])==-1){
                    arr2.push(rs[i]);
                }
                
            }

            // console.log(arr2);
            let Date=  {
                "code": 0,
                "msg": "",
                "data":arr2
                }
            console.log(Date);
                // console.log(res);
            // 将去重的种类发送给前端
            res.send(Date);
        }).catch(function(dataO){
            let Date=  {
                "code": 0,
                "msg": "",
                "data":arr2
                }
            console.log(Date);
                // console.log(res);
            // 将去重的种类发送给前端
            res.send(Date);
        })

    }else if(body1._method=='search'){
        let title=body1.title;
        let categroy=body1.categroy;
        let sql=`SELECT * FROM goodlist WHERE title LIKE '%${title}%' and categroy='${categroy}'`
        // console.log(body1);
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
            let data=  {
                "code": 0,
                "msg": "",
                // count:
                "data":'err'
                }
                console.log('失败');
            res.send(data);
        });
    }
   
});







module.exports = Router;