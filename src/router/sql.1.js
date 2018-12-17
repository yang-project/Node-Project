const mysql=require('mysql');
var pool=mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database: 'useinf'
});

// 封装函数特点，单一原则 、低耦合
// 查:
exports.query= sql=>{
    return new Promise((resolve,reject)=>{
        pool.query(sql,function(error,rows){
            let data;
            if(error){
                data={
                    status:0,
                    data:error
                }
                reject(data);
                return;
            }
            data={
                status:1,
                data:rows
            }
            resolve(data);
        });
        
    })
}