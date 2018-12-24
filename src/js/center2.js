$(document).ready(function(){
    $isok=false;
    // 点击一级导航
    // 请求状态
    $('#backlogin').click(function(){
      console.log('返回登录页')
        location.href='../html/login.html'
    });
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
    //////////////// 此时表格显示，表单隐藏
            $('table').css('display','block');
            $('form').css('display','none');
            $('.all').css('display','block');
    // 商品列表的操作
            if($val2=='商品列表'){
              $('#select').css('display','block')
                // console.log(2);

                // 渲染出商品分类
                  console.log(22);
                  $.ajax({
                    type: 'post',
                    url: '/page',
                    // data: {`ids:${index}`,'_method:delete'},
                  
                    data:'_method=selectAll',
                    success: function(data){
                      // 里面放接口
                      var arr=data.data;
                      
                      console.log(arr);
                      for(var i=0;i<arr.length;i++){
                        
                        $('.select').append(`<option value=${arr[i]}>${arr[i]}</option>`);
                      }

                      
                      // console.log('删除成功');
                    },
                    error: function(data){
                        // console.log('删除失败');
                    }
                  });
                
                  var categroy='';
                  var title='';
                  // 点击搜索框，进行数据库查找 
                  $('#search').click(function(){
                      console.log(33);
                       title=$('.search').val();
                      if(title){
                        categroy=jQuery(".select  option:selected").text();
                        console.log(categroy);
                        // 发送ajax请求，进行查找
                        $.ajax({
                          type: 'get',
                          url: '/page',
                          // data: {`ids:${index}`,'_method:delete'},
                    
                          data:'title='+title+'&categroy='+categroy,
                          success: function(data){
                            // 里面放接口
                            var arr=data.data;
                            
                            console.log(arr);
                            var table = layui.table;
                            table.render({
                              elem: '#test'
                              ,url:'/page?categroy='+categroy+'&title='+title
                              ,toolbar: `<div class="layui-btn-container" id="#toolbarDemo">
                              <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button>
                              <button class="layui-btn layui-btn-sm" lay-event="getCheckDel">批量删除</button>
                             </div>
                              `
                              ,title: '商品列表'
                              ,cols: [[
                                {type: 'checkbox', fixed: 'left'}
                                ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                                ,{field:'title',title:'商品名称', width:120, edit: 'text'}
                                ,{field:'price',title:'价格', width:120, edit: 'text',sort: true}
                                ,{field:'url', title:'图片地址', width:150, edit: 'text'}
                                ,{field:'categroy', title:'商品分类', width:80, edit: 'text', sort: true}
                                ,{field:'time', title:'加入时间', width:120}
                                ,{field:'status', title: '上下架状态'}           
                                ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:280}
                              ]]
                              ,page: true
                            });
                        //    $('.layui-table-main table tbody').append(`<tr data-index="0" class="">
                        //    <td data-field="0" data-key="1-0-0" class="layui-table-col-special"><div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox"><input type="checkbox" name="layTableCheckbox" lay-skin="primary"><div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon layui-icon-ok"></i></div></div></td>
                        //    <td data-field="id" data-key="1-0-1" class=""><div class="layui-table-cell laytable-cell-1-0-1">12</div></td>
                        //    <td data-field="title" data-key="1-0-2" data-edit="text" class=""><div class="layui-table-cell laytable-cell-1-0-2">男士休闲长裤 修身直筒 18FMS-K002 </div></td>
                        //    <td data-field="price" data-key="1-0-3" data-edit="text" class=""><div class="layui-table-cell laytable-cell-1-0-3">188</div></td>
                        //    <td data-field="url" data-key="1-0-4" data-edit="text" class=""><div class="layui-table-cell laytable-cell-1-0-4">../img/goodlist/2.jpg</div></td>
                        //    <td data-field="categroy" data-key="1-0-5" data-edit="text" class=""><div class="layui-table-cell laytable-cell-1-0-5">时尚长裤</div></td>
                        //    <td data-field="time" data-key="1-0-6" class=""><div class="layui-table-cell laytable-cell-1-0-6">2018-12-16</div></td><td data-field="status" data-key="1-0-7" class=""><div class="layui-table-cell laytable-cell-1-0-7">0</div></td>
                        //    <td data-field="caozuo" data-key="1-0-8" data-off="true" class=""><div class="layui-table-cell laytable-cell-1-0-8"> <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a> <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a> <a class="layui-btn layui-btn-xs up" lay-event="up">上架</a> <a class="layui-btn layui-btn-xs down" lay-event="down">下架</a> </div></td>
                        //  </tr>`);
                   
                       
                            
                            // console.log('删除成功');
                          },
                          error: function(data){
                              // console.log('删除失败');
                          }
                        });

                      }
                  });
                  
                  
                 
                // 初步渲染   
                layui.use('table', function(){
                  var table = layui.table;
                  
                  // 里面放接口
                  table.render({
                    elem: '#test'
                    ,url:'/page?categroy='+categroy+'&title='+title
                    ,toolbar: `<div class="layui-btn-container" id="#toolbarDemo">
                    <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button>
                    <button class="layui-btn layui-btn-sm" lay-event="getCheckDel">批量删除</button>
                   </div>
                    `
                    ,title: '商品列表'
                    ,cols: [[
                      {type: 'checkbox', fixed: 'left'}
                      ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                      ,{field:'title',title:'商品名称', width:120, edit: 'text'}
                      ,{field:'price',title:'价格', width:120, edit: 'text',sort: true}
                      ,{field:'url', title:'图片地址', width:150, edit: 'text'}
                      ,{field:'categroy', title:'商品分类', width:80, edit: 'text', sort: true}
                      ,{field:'time', title:'加入时间', width:120}
                      ,{field:'status', title: '上下架状态'}           
                      ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:280}
                    ]]
                    ,page: true
                  });

                
                  //头工具栏事件 添加商品
                  table.on('toolbar()', function(obj){
                    // console.log(obj.config.id);
                    
                    var checkStatus = table.checkStatus(obj.config.id);
                    console.log(obj.config);

                    // 点击多选框，发送请求给后台，后台通过去重把所有的分类返回给其前端
                    
                    
                    if(obj.event=='getCheckData'){
                      // console.log(44);
          ////////// 让新增的商品信息表显示其他的表格隐藏  select
                      $('#select').css('display','none');
                      $('.all').css('display','none');
                      $('.userform').css('display','none');
                      $('.userform').css('z-index','0');
                      $('table').css('display','none');
                      $('.goodsform').css('display','block');
                      $('.goodsform').css('z-index','1000');



  //////////////////////////图片上传
                      
                      layui.use('upload', function(){
                        var $ = layui.jquery
                        ,upload = layui.upload;
                        upload.render({
                            elem: '#test2'
                            ,url: '/load'
                            ,multiple: true
                            ,before: function(obj){
                              //预读本地文件示例，不支持ie8
                              obj.preview(function(index, file, result){
                                $('#demo2').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img" style="width:60px; height:60px;margin-right:20px;">')
                              });
                            }
                            ,done: function(res){
                              //上传完毕
                            }
                        });
                      });

                      $('#success').click(function(){
                          title=$('#title').val();
                        
                          var price=$('#price').val();
                          categroy=jQuery("#select2  option:selected").text();
                          console.log(categroy);
                          if($("#status").prop('checked')){
                            var status=1;
                          }else{
                            var status=0;
                          }
                          // var status=jQuery("#status[type=checkbox]:checked").attr('lay-text');
                          // 发送请求

                          $.ajax({
                            type: 'post',
                            url: '/load/add',
                            // data: {`ids:${index}`,'_method:delete'},
                          
                            data:'title='+title+'&categroy='+categroy+'&price='+price+'&status='+status+'&time='+new Date(),
                            success: function(data){
                              // 里面放接口
                              var arr=data.data;
                              
                             
        
                              
                              // console.log('成功');
                            },
                            error: function(data){
                                // console.log('删除失败');
                            }
                          });
                      });
                      // 获取信息
                      
                         
                            

                      
                    }else if(obj.event=='getCheckDel'){
                      // 当前页的商品数目
                        le=obj.config.limit;
                        var arr=[];
                
                        console.log(le+'总条数');
                        let lee=$('.layui-table-fixed-l  .layui-table-body tbody input').length;
                        // console.log(lee+'总条数');
                        // 先统计出复选框的总个数
                        // var id=$('.layui-table-fixed-l  .layui-table-body tbody .laytable-cell-1-0-1').html();
                        // console.log('对应的下标为'+id);
                       
                        for(var i=0;i<le;i++){
                          
                          if($('.layui-table-fixed-l  .layui-table-body tbody input').eq(i).prop('checked')){
                              // 说明这一行已经被勾选
                              // var id=$(this).parent().parent().next().children('.layui-table-cell').html();
                              // console.log(id);
                              arr.push(i);//
                              // console.log(arr[i]);
                          }
                        }
                        console.log(arr);
                      // 将选中的id传给数组，在进行arr长度和总个数比较：
                      var idArr=[];
                      for(var i=0;i<arr.length;i++){
                         var id=$('.layui-table-fixed-l  .layui-table-body tbody input').eq(i).parent().parent().next().children('.layui-table-cell').html();
                         idArr.push(id);
                      }
                      // console.log('获取的id分别是'+idArr);
                      // 将id转成字符串
                      var idStr=idArr.join();

                      
                      // le>arr.length时，全选框为不可选状态，批量删除时最批量删除 设置条件为 where id in()
                      // if(le==arr.length){
                      //   $('.layui-table-box .layui-table-header .aytable-cell-checkbox input').prop('checked','checked');
                      // }else{
                      //   $('. layui-table-box .layui-table-header .aytable-cell-checkbox input').removeAttr('checked');
                      // }
                      
      //////////////// 传给后台，改变数据库数据
                      $.ajax({
                        type: 'post',
                        url: '/page',
                        // data: {`ids:${index}`,'_method:delete'},
                      
                        data:'ids='+idStr+'&_method=deletes',
                        success: function(data){
                          // 里面放接口
                          table.render({
                            elem: '#test'
                            ,url:'/page'
                            ,toolbar: ` <div class="layui-btn-container" id="#toolbarDemo">
                            <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button>
                            <button class="layui-btn layui-btn-sm" lay-event="getCheckDel">批量删除</button></div>
                            <input type='text' placehoder='请输入标题'/>`
                            ,title: '用户列表'
                            ,cols: [[
                              {type: 'checkbox', fixed: 'left'}
                              ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                              ,{field:'title',title:'商品名称', width:120, edit: 'text'}
                              ,{field:'price',title:'价格', width:120, edit: 'text',sort: true}
                              ,{field:'url', title:'图片地址', width:150, edit: 'text'}
                              ,{field:'categroy', title:'商品分类', width:80, edit: 'text', sort: true}
                              ,{field:'time', title:'加入时间', width:120}
                              ,{field:'status', title: '上下架状态'}           
                              ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:280}
                            ]]
                            ,page: true
                          });
                          console.log(data);
                          
                          console.log('删除成功');
                        },
                        error: function(data){
                            console.log('删除失败');
                        }
                      });
                     
                    }else if(obj.event=='getCheckSearch'){
                       console.log('search');
                    }
                    // 现在获取元素值
                    
                    







///////////////////////////////////////
                    var sex;
                    $('.layui-form-radio i').click(function(){
                      
                          console.log(77);
                          sex=$(this).parent().prev().val();
                          console.log(sex)
                          
                    }); 
                    $('#submit').click(function(){
  
                      let username=$('.username').val();
                    console.log(username);
                    let password=$('.password').val();
                    // 设置点击按钮事件,获取性别
                  
                                         
                    // 
                    var score=$('.score').val();
                    var time=$('.time').val();
                    var data='username='+username+'&password='+password+'&sex='+sex+'&score='+score+'&time='+time+'&_method=post';
                        
                    });
  
                   
                  });

                  //监听行工具事件
                  table.on('tool(test)', function(obj){
                    var arr = obj.data;
                    console.log(arr);
                    // console.log(JSON.stringify(arr));
                    var id=arr.id;
                    var data=JSON.stringify(arr);
                    if(obj.event === 'del'){
                      layer.confirm('真的删除行么', function(index){
                        obj.del(); 
                      $.ajax({
                          type: 'post',
                          url: '/page',
                          // data: {`ids:${index}`,'_method:delete'},
                          data:'ids='+id+'&data='+data+'&_method=delete',
                          success: function(data){
                             // 里面放接口
      
                               // 里面放接口
                              table.render({
                                elem: '#test'
                                ,url:'/page?categroy='+categroy+'&title='+title
                                ,toolbar: `<div class="layui-btn-container" id="#toolbarDemo">
                                <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button>
                                <button class="layui-btn layui-btn-sm" lay-event="getCheckDel">批量删除</button>
                              </div>
                                `
                                ,title: '商品列表'
                                ,cols: [[
                                  {type: 'checkbox', fixed: 'left'}
                                  ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                                  ,{field:'title',title:'商品名称', width:120, edit: 'text'}
                                  ,{field:'price',title:'价格', width:120, edit: 'text',sort: true}
                                  ,{field:'url', title:'图片地址', width:150, edit: 'text'}
                                  ,{field:'categroy', title:'商品分类', width:80, edit: 'text', sort: true}
                                  ,{field:'time', title:'加入时间', width:120}
                                  ,{field:'status', title: '上下架状态'}           
                                  ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:280}
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
                          url: '/goods',
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
                              ,url:'/page?categroy='+categroy+'&title='+title
                              ,toolbar: `<div class="layui-btn-container" id="#toolbarDemo">
                              <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button>
                              <button class="layui-btn layui-btn-sm" lay-event="getCheckDel">批量删除</button>
                            </div>
                              `
                              ,title: '商品列表'
                              ,cols: [[
                                {type: 'checkbox', fixed: 'left'}
                                ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                                ,{field:'title',title:'商品名称', width:120, edit: 'text'}
                                ,{field:'price',title:'价格', width:120, edit: 'text',sort: true}
                                ,{field:'url', title:'图片地址', width:150, edit: 'text'}
                                ,{field:'categroy', title:'商品分类', width:80, edit: 'text', sort: true}
                                ,{field:'time', title:'加入时间', width:120}
                                ,{field:'status', title: '上下架状态'}           
                                ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:280}
                              ]]
                              ,page: true
                            });
                              
                          },
                          error: function(data){
                              console.log('更新失败');
                          }
                      });
                      })
                     
  
                    }else if(obj.event==='up'){
                      if(arr.status==1){
                        $(this).addClass('active');
                        $(this).next().removeClass('active');
                        alert('该商品已经上架');
                        
                      }else{
                        // 更改商品
                        $(this).addClass('active');
                        $(this).next().removeClass('active');
                        $.ajax({
                          type: 'post',
                          url: '/page',
                          // data: {`ids:${index}`,'_method:delete'},
                          data:'ids='+id+'&data='+data+'&_method=up',
                          success: function(data){
                             // 里面放接口
                            
                             table.render({
                              elem: '#test'
                              ,url:'/page?categroy='+categroy+'&title='+title
                              ,toolbar: `<div class="layui-btn-container" id="#toolbarDemo">
                              <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button>
                              <button class="layui-btn layui-btn-sm" lay-event="getCheckDel">批量删除</button>
                            </div>
                              `
                              ,title: '商品列表'
                              ,cols: [[
                                {type: 'checkbox', fixed: 'left'}
                                ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                                ,{field:'title',title:'商品名称', width:120, edit: 'text'}
                                ,{field:'price',title:'价格', width:120, edit: 'text',sort: true}
                                ,{field:'url', title:'图片地址', width:150, edit: 'text'}
                                ,{field:'categroy', title:'商品分类', width:80, edit: 'text', sort: true}
                                ,{field:'time', title:'加入时间', width:120}
                                ,{field:'status', title: '上下架状态'}           
                                ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:280}
                              ]]
                              ,page: true
                            });
                            console.log('上架成功');
                           
                          },
                          error: function(data){
                              console.log('上架失败');
                          }
                        }); 
                      }
                         
                    }else if(obj.event==='down'){
                      if(arr.status==0){
                        $(this).addClass('active');
                        $(this).prev().removeClass('active');
                        alert('该商品已经下架');
                       
                      }else{
                        // 更改商品
                        $(this).addClass('active');
                        $(this).prev().removeClass('active');
                        $.ajax({
                          type: 'post',
                          url: '/page',
                          // data: {`ids:${index}`,'_method:delete'},
                          data:'ids='+id+'&data='+data+'&_method=down',
                          success: function(data){
                             // 里面放接口
                             
                             table.render({
                              elem: '#test'
                              ,url:'/page?categroy='+categroy+'&title='+title
                              ,toolbar: `<div class="layui-btn-container" id="#toolbarDemo">
                              <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button>
                              <button class="layui-btn layui-btn-sm" lay-event="getCheckDel">批量删除</button>
                            </div>
                              `
                              ,title: '商品列表'
                              ,cols: [[
                                {type: 'checkbox', fixed: 'left'}
                                ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                                ,{field:'title',title:'商品名称', width:120, edit: 'text'}
                                ,{field:'price',title:'价格', width:120, edit: 'text',sort: true}
                                ,{field:'url', title:'图片地址', width:150, edit: 'text'}
                                ,{field:'categroy', title:'商品分类', width:80, edit: 'text', sort: true}
                                ,{field:'time', title:'加入时间', width:120}
                                ,{field:'status', title: '上下架状态'}           
                                ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:280}
                              ]]
                              ,page: true
                            });
                            // 使当前变高亮
                            
                            console.log('下架成功');
                          },
                          error: function(data){
                              console.log('下架失败');
                          }
                        }); 
                      }
                         
                    }
                  });
                });



                
            }

    // 商品类别的操作          
            if($val2=='商品分类'){                       
            }

    // 用户信息的操作          
            if($val2=='用户列表'){     
                    $('#select').css('display','none');   
                    $('#up').css('display','none');
                    $('#down').css('display','none');
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
                          // console.log(checkStatus);
                          console.log(33);
                          if(obj.event=='getCheckData'){
                            console.log(44);
                            // $('#layui-layer-shade1').css('display','none');
                            // $('#layui-layer1').css('display','none');
          /////////////////////// 此时表格显示，表单显示
                            $('.all').css('display','none');
                            $('.goodsform').css('display','none');
                            $('.userform').css('display','block');
                            $('.userform').css('z-index','10000');
                            //  $('.goodsform').css('display','block');
                          }
                          // 现在获取元素值 
                          var sex;
                          $('.layui-form-radio i').click(function(){
                            
                                console.log(77);
                                sex=$(this).parent().prev().val();
                                console.log(sex)
                                
                          }); 
                          $('#submit').click(function(){

                            let username=$('.username').val();
                          console.log(username);
                          let password=$('.password').val();
                          // 设置点击按钮事件,获取性别
                        
                                              
                          // 
                          var score=$('.score').val();
                          var time=$('.time').val();
                          var data='username='+username+'&password='+password+'&sex='+sex+'&score='+score+'&time='+time+'&_method=post';
                            $.ajax({
                              type: 'post',
                              url: '/user',
                              // data: {`ids:${index}`,'_method:delete'},
                              data:data,
                              // data:'ids='+id+'&data='+data+'&_method=delete',
                              success: function(data){
                                // 里面放接口
                                console.log(data);
                                //  table.render({
                                //     elem: '#test'
                                //     ,url:'/user'
                                //     ,toolbar: ` <div class="layui-btn-container" id="#toolbarDemo">
                                //     <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button></div>`
                                //     ,title: '用户列表'
                                //     ,cols: [[
                                //       {type: 'checkbox', fixed: 'left'}
                                //       ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                                //       ,{field:'username', title:'用户名', width:120, edit: 'text'}
                                //       ,{field:'password', title:'密码', width:150, edit: 'text'}
                                //       ,{field:'sex', title:'性别', width:80, edit: 'text', sort: true}
                                //       ,{field:'score', title: '评分', sort: true}                      
                                //       ,{field:'joinTime', title:'加入时间', width:120}
                                //       ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:200}
                                //     ]]
                                //     ,page: true
                                //   });
                              console.log('添加成功');
                              },
                              error: function(data){
                                  console.log('删除失败');
                              }
                            });  
                          });

                        
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
              $('#select').css('display','none');   
              $('#up').css('display','none');
              $('#down').css('display','none');
              layui.use('table', function(){
                    
                var table = layui.table;
                
                // 里面放接口
                table.render({
                  elem: '#test'
                  ,url:'/shop'
                  ,toolbar: ` <div class="layui-btn-container" id="#toolbarDemo">
                  <button class="layui-btn layui-btn-sm" lay-event="getCheckData">添加</button></div>`
                  ,title: '订单列表'
                  ,cols: [[
                    {type: 'checkbox', fixed: 'left'}
                    ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true}
                    ,{field:'title', title:'商品名称', width:120, edit: 'text'}
                    ,{field:'price', title:'售价', width:150, edit: 'text',sort: true}
                    ,{field:'num', title:'数量', width:80, edit: 'text', sort: true}
                    ,{field:'total', title: '总金额', sort: true}                      
                    ,{field:'url', title:'图片', width:120}
                    ,{field:'caozuo', title:'操作',toolbar: '#barDemo', width:200}
                  ]]
                  ,page: true
                });
                //头工具栏事件
                
              });

                
            }

        });
    
       
    
    });
});
