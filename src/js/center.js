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
                $('.goodlistmain_r').css('display','block');
                $('.goodlistmain_r').siblings().css('display','none');

                
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
                console.log(2);
                $('.categroymain_r').css('display','block');
                $('.categroymain_r').siblings().css('display','none');

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
                console.log(2);
               
                layui.use('table', function(){
                    console.log(11);
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
                        ,{field:'caozuo', title:'操作', width:120}
                      ]]
                      ,page: false
                    });
                    //头工具栏事件
                    table.on('toolbar()', function(obj){
                      var checkStatus = table.checkStatus(obj.config.id);
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
                    table.on('tool()', function(obj){
                      var data = obj.data;
                      //console.log(obj)
                      if(obj.event === 'del'){
                        layer.confirm('真的删除行么', function(index){
                          obj.del();
                          layer.close(index);
                        });
                      } else if(obj.event === 'edit'){
                        layer.prompt({
                          formType: 2
                          ,value: data.email
                        }, function(value, index){
                          obj.update({
                            email: value
                          });
                          layer.close(index);
                        });
                      }
                    });
                  });
                
            }
    // 订单列表的操作  
            if($val2=='订单列表'){
                console.log(2);
                $('.shopcartmain_r').css('display','block');
                $('.shopcartmain_r').siblings().css('display','none');

                // 发送ajax请求，渲染出列表页
                let xhr = new XMLHttpRequest();
                
            }

        });
    
       
    
    });
});
