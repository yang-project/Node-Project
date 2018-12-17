const express=require('express');
const mysql=require('mysql');
const _sql=require('./sql')

// 创建连接池  后面会被封装到sql.js

// var pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'useinf',
//     multipleStatements:true
// });

// 创建express应用
let app=express();


// app.get('/city',(req,res)=>{
//     console.log(666);
//     // 编sql语句
//     let sql=`select * from user`;
    //  执行sql语句
    // 方法一：利用数据池query获取数据

    // pool.query(sql,function(erro,rows){
    //     // 返回内容给前端
    //     res.send(rows);
    // });

    //方法二： 利用回调函数获取数据
    // sql.query(sql,(data)=>{
    //     res.send(data);
    // })

    // 方法三： 利用promise对象获取数据
    // _sql.query(sql)
    // // 成功获取数据
    // .then(data=>{
    //     res.send(data);
    // })
    // .catch(error=>{
    //     res.send(error);
    // });   

// })

 app.get('/city',async(req,res)=>{
     console.log(777);
 // 方法四：利用async，await实现数据获取
    let sql=`select * from user`;
     
    let data=await _sql.query(sql);
    res.send(data);

 });

 
 app.get('/student',async(req,res)=>{
     let sql = `select * from student`;
     let data=await _sql.query(sql);
     res.send(data);

 })

 app.listen(3000,()=>{
     console.log('server is running on http://localhost:3000');
 })