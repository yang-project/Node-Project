export default {
  state: {
    
        cartlist:[],
        number:0,
        total:''
         
  },
  mutations:{
     // 添加到购物车列表
      add(state,payload){
        state.cartlist=[...state.cartlist,payload];
        state.number++  
    },
    // 删除商品，前面传的是id
    remove(state,payload){//{id:xxx}
        let index;
        
        if( state.cartlist[0].state==1){
          state.cartlist.forEach((item,idx)=>{
                if(item.id===payload){
                  index = idx;
                 
                }
              })
          state.cartlist.splice(index,1)
        }
    
    },

    // 清空购物车
    clear(state){
      state.cartlist = [];
    },
    updata(state,payload){
      let index;
      state.cartlist.forEach((item,idx)=>{
        if(item.id===payload){
          index = idx;
          state.cartlist[0].spectypes[0].specList[0].sort++
        }
      })
    },
    jianshao(state,payload){
      let index;
      state.cartlist.forEach((item,idx)=>{
        if(item.id===payload){
          index = idx;
          state.cartlist[0].spectypes[0].specList[0].sort--
        }
      })
    },
    // selected(state,payload){
    //   let index;
      
    //   state.cartlist.forEach((item,idx)=>{
    //     if(item.id===payload){
    //       index = idx;
    //       state.cartlist[index].state=0;

    //     }
    //   });
    //   state.cartlist.forEach((item,idx)=>{
    //     if(item.state==0){
    //       state.total+=((state.cartlist[idx].minPrice/100)*(state.cartlist[idx].spectypes[0].specList[0].sortNum)).toFixed(2);
    //     }
    //   });
      
      
    // }
  
}
}
