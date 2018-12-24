const express = require('express');
const _sql=require('./sql');
const bodyParser=require('body-parser')
let Router = express.Router();
Router.post('/',bodyParser.urlencoded({extended:false}),(req,res)=>{
  
    let {username,password}=req.body;
    var sql = `SELECT * FROM user where username='${username}' and password='${password}'`;      
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


    
   
});


module.exports = Router;