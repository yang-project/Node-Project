
const express=require('express');
const mysql=require('mysql');
const _sql=require('./sql');

// 创建express应用
let app=express();

app.get('/goodlist',async(req,res)=>{
    console.log(777);
// 方法四：利用async，await实现数据获取
   let sql=`select * from goodlist`;
    
   let data=await _sql.query(sql);
   res.send(data);
});

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
})
