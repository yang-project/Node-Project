$(document).ready(function(){
    $isok=false;
    // 点击一级导航
    // 请求状态
    let status = [200,304];
    $('.layui-nav-side').delegate('.floor_a','click',function(){
        $val=$(this).html().slice(0,4);
        
        $('.mianbaoxie .floor_1 a').eq(1).html($val);
        // 点击二级导航，触发面包屑的二级导航的渲染和表格信息的渲染
        $('.floor_b').click(function(){
            // 面包屑的二级导航的渲染出来
            $val2=$(this).html();
            console.log($val2);
            $('.mianbaoxie .floor_1 a').eq(2).html($val2);
// 渲染出表格内容

    // 商品列表的操作
            if($val2=='商品列表'){
                console.log(2);
                

                
                // 第一步：发送ajax请求，渲染出整个列表页
                // let xhr = new XMLHttpRequest();

                // xhr.open('get','/goodlist',true);  
                // xhr.send();
                // xhr.onload = ()=>{
                //     if(status.includes(xhr.status)){
                //         let res = JSON.parse(xhr.responseText);
                        
                //     }
                // }



                
            }

    // 商品类别的操作          
            if($val2=='商品分类'){
                

                // // 发送ajax请求，渲染出列表页
                // let xhr = new XMLHttpRequest();
                // xhr.open('get','/goodlist',true);  
                // xhr.send();
                // xhr.onload = ()=>{
                //     if(status.includes(xhr.status)){
                //         let res = JSON.parse(xhr.responseText);
                        
                //     }
                // }
                
            }

    // 用户信息的操作          
            if($val2=='用户列表'){              
                layui.use('table', function(){
                    
                    var table = layui.table;
                    
                    // 里面放接口
                    table.render({
                      elem: '#test'
                      ,url:'/user'
                      ,toolbar: ` <div class="layui-btn-container" id="#toolbarDemo">
                      <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button></div>`
                      ,title: '用户列表'
                      ,cols: [[
                        {type: 'checkbox', fixed: 'left'}
                        ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                        ,{field:'username', title:'用户名', width:120, edit: 'text'}
                        ,{field:'password', title:'密码', width:150, edit: 'text'}
                        ,{field:'sex', title:'性别', width:80, edit: 'text', sort: true}
                        ,{field:'score', title: '评分', sort: true}                      
                        ,{field:'joinTime', title:'加入时间', width:120}
                        ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:200}
                      ]]
                      ,page: true
                    });
                    //头工具栏事件
                    table.on('toolbar()', function(obj){
                      // console.log(obj.config.id);
                      var checkStatus = table.checkStatus(obj.config.id);
                      console.log(checkStatus);
                      switch(obj.event){
                        case 'getCheckData':
                          var data = checkStatus.data;
                          layer.alert(JSON.stringify(data));
                        break;
                        case 'getCheckLength':
                          var data = checkStatus.data;
                          layer.msg('选中了：'+ data.length + ' 个');
                        break;
                        case 'isAll':
                          layer.msg(checkStatus.isAll ? '全选': '未全选');
                        break;
                      };
                    });
                    //监听行工具事件
                    table.on('tool(test)', function(obj){
                      var arr = obj.data;
                      // console.log(JSON.stringify(arr));
                      var id=arr.id;
                      var data=JSON.stringify(arr);
                      if(obj.event === 'del'){
                        layer.confirm('真的删除行么', function(index){
                          obj.del(); 
                        $.ajax({
                            type: 'post',
                            url: '/user',
                            // data: {`ids:${index}`,'_method:delete'},
                            data:'ids='+id+'&data='+data+'&_method=delete',
                            success: function(data){
                               // 里面放接口
                                table.render({
                                  elem: '#test'
                                  ,url:'/user'
                                  ,toolbar: ` <div class="layui-btn-container" id="#toolbarDemo">
                                  <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button></div>`
                                  ,title: '用户列表'
                                  ,cols: [[
                                    {type: 'checkbox', fixed: 'left'}
                                    ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                                    ,{field:'username', title:'用户名', width:120, edit: 'text'}
                                    ,{field:'password', title:'密码', width:150, edit: 'text'}
                                    ,{field:'sex', title:'性别', width:80, edit: 'text', sort: true}
                                    ,{field:'score', title: '评分', sort: true}                      
                                    ,{field:'joinTime', title:'加入时间', width:120}
                                    ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:200}
                                  ]]
                                  ,page: true
                                });
                            console.log('删除成功');
                            },
                            error: function(data){
                                console.log('删除失败');
                            }
                        });    
                          layer.close(index);
                        });
                      } else if(obj.event === 'edit'){
                        
                        layer.alert(`<textarea id="t1" cols=10 rows=8 style="width:100%;">${data}</textarea>`);
                        
                        $('.layui-layer-btn0').click(function(){
                          // 查找节点
                          let dataA=$(this).parent().parent().children().eq(1).children('textarea').val();
                          // let dataA=$('textarea').html();
                          console.log('dataA:'+dataA);
                          $.ajax({
                            type: 'post',
                            url: '/user',
                            // async:false,
                            // data: {`ids:${index}`,'_method:edit'},
                            // data:'ids='+id+'&_method=edit',
                            data:'ids='+id+'&data='+dataA+'&_method=put',
                            success: function(data){
                              // console.log(data);
                              var str=data.data[0];

                              // console.log(str);
                              // 存储后端发过来的重新要渲染的值
                              var arr=[];
                     
                              for (x in str)  
                                {
                                  arr.push(str[x]);  
                                }
                                // 获取到更改对应的td所对应的div
                              // 里面放接口
                    table.render({
                      elem: '#test'
                      ,url:'/user'
                      ,toolbar: ` <div class="layui-btn-container" id="#toolbarDemo">
                      <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button></div>`
                      ,title: '用户列表'
                      ,cols: [[
                        {type: 'checkbox', fixed: 'left'}
                        ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                        ,{field:'username', title:'用户名', width:120, edit: 'text'}
                        ,{field:'password', title:'密码', width:150, edit: 'text'}
                        ,{field:'sex', title:'性别', width:80, edit: 'text', sort: true}
                        ,{field:'score', title: '评分', sort: true}                      
                        ,{field:'joinTime', title:'加入时间', width:120}
                        ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:200}
                      ]]
                      ,page: true
                    });
                                
                            },
                            error: function(data){
                                console.log('更新失败');
                            }
                        });
                        })
                       
    // 获取全部然后手动更新   
                        // layer.prompt({
                        //   formType:4,
                        //   value:data.score

                        // }, function(value, index){
                        //     // 点击编辑的时候把内容把对象渲染到方框中先
                      
                        //   obj.update({
                        //   score: value
                        //   });
                          
                          // layer.close(id);
                        // });
                      }
                    });
                  });
                
            }
    // 订单列表的操作  
            if($val2=='订单列表'){
                
                
            }

        });
    
       
    
    });
});
