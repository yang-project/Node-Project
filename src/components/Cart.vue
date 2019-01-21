<template>

    <div class="cartWrap">
      <header class="gHeader clearfix">
        <div class="search-box" style="color: rgb(88, 89, 89);">
          <h2>购物车</h2>
        </div> 
        <div class="editContainer">
          <span class="edit"></span>
        </div>
      </header>
      <div class="wrapPadding">
        <div class="cartList">
          <div class="listHeader">
            <input type='checkbox' class="">
            <span >优德电商平台</span>
          </div> 
         <ul v-for='item in get_goodlist' :key='item.id'>
            <li class="listItem" @click='selected(item.id)'>
              <div class="listItemContainer">
                <div class="checkBox">
                  <input type='checkbox' class="" >
                </div> 
                <span class="goodsImg">
                  <img :src="item.thumbnail" class="imgSize">
                </span> 
                <div class="goodsRight">
                  <h3 class="goodsName">{{item.title}}</h3> 
                  <span class="goodsSize">{{item.spectypes[0].specList[0].specValue}}</span>
                  <div class="goodsRightBtm">
                    <span class="goodsPrice">{{((item.maxPrice)/100).toFixed(2)}}</span> 
                    
                    <div  class="goodsCount">
                    <span  class="de active" @click='jianshao(item.id)'>-</span>
                    <em >{{item.spectypes[0].specList[0].sort}}</em> 
                    <span  class="add" @click='updata(item.id)'>+</span>
                    </div>
                    <div class="getDelete" @click="Remove(item.id)">删除</div>
                   
                  </div>
                </div>
              </div> 
            
            </li> 
          </ul>
        </div>  
        <div class="cartFixedBtm">
          <div class="cartCheckAll">
            <input type="checkbox"> 全选
          </div> 
          <div class="cartTotal">
            <p >合计：<strong >0</strong></p>
          </div> 
          <div class="cartFixedRight">
            <span >结算</span>
            <span @click="Clear">清除购物车</span>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      tabsName: [],
      str:[]
    };
  },
  computed:{
      get_goodlist:function(){
        //  console.log(22);
         this.tabsName= this.$store.state.cart.cartlist;
         console.log(this.$store.state.cart.cartlist)
        return this.tabsName;
      }
  },
  methods:{
        Remove(item){
            console.log(item);
            this.$store.commit('remove',item)
        },
         // 清空购物车
        Clear(){
            
            this.$store.commit('clear')
            console.log(444)
        },
        updata(item){
            this.$store.commit('updata',item)
        },
          jianshao(item){
            this.$store.commit('jianshao',item)
        },
        // selected(id){
           
        //     this.$store.commit('selected',id);
        //     console.log(this.$store.state.cart.total)
           
        // }

 },
    // mounted(){
    //     // this.Remove(items);
    //     this.$nextTick(()=>{
    //             this.Clear();
    //     })
            
        
       
    // }
    //   删除
     
     
   
   


};
</script>
<style>
.cartWrap{
      width: 100%;
}
.gHeader{
    position: fixed;
    width: 100%;
    height: .96rem;
    padding-top: 0;
    line-height: 1.5;
    top: 0;
    left: 0;
    z-index: 100;
    margin: auto;
    right: 0;
    background: #fff;
    border-bottom: 1px solid #e7e7e7;
}
.gHeader .search-box{
    margin: 0 .48rem;
    text-align: center;
    line-height: .96rem;
    color: #585959;
    font-size: .35rem;
}
.cartWrap .wrapPadding {
    padding: .96rem 0 2rem;
}
.cartWrap .cartList {
    background: #fff;
}
.cartWrap .listHeader {
    width: 100%;
    height: 37.69px;
    line-height: 37.69px;
    font-size: .3rem;
    color: #464646;
    border-bottom: 1px solid #efefef;
}
.cartWrap .listHeader input{
    float: left;
    margin: 10.24px;
    display: inline-block;
}

.cartWrap .cartList ul li{
  list-style: none;
  height: 117px;
}
 
.cartWrap .listItemContainer {
    height: 100%;
    position: relative;
    padding:4.26px 10.24px;
}
.cartWrap .listItemContainer .checkBox {
    width: 16px;
    height: 79px;
    position: relative;
    float: left;
    text-align: center;
}
.cartWrap .listItemContainer input {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -.19rem;
}
.checkBox {
    display: inline-block;
}
.cartWrap .listItemContainer .goodsImg{
    display: inline-block;
    width: 66px;
    height: 66px;
    overflow: hidden;
    float: left;
    margin-left: 10.24px;
    margin-top: 6.4px;
}
.cartWrap .listItemContainer .goodsImg .imgSize {
     width: 66px;
    height: 66px;
}
.cartWrap .listItemContainer .goodsRight {
    float: right;
    width: 196px;
    height: 80px;
    display: flex;
    flex-direction: column;
  
    justify-content: space-between;
}
.cartWrap .listItemContainer .goodsName {
    font-size: .28rem;
    color: #464646;
    display: flex;
    
}
.cartWrap .listItemContainer .goodsSize {
  display:block;
  height: 9.6px;
  font-size: .22rem;
  color: #898989;
  /* text-align: left; */
  margin:0 0;
}
.cartWrap .listItemContainer .goodsRightBtm {
  text-align: left;
    height: 24px;
    line-height: 24px;
    overflow: hidden;
     margin:0 0;
}
.cartWrap .listItemContainer .goodsPrice {
    font-size: .24rem;
    color: #f55251;
    float: left;
}
.goodsCount {
    float: left;
    height:20px;
    margin-top: 0.64px;
    margin-left: 20px;
}
.getDelete{
    float: right;
    margin-right:2px;
    height:20px;
    width: 50px;
    line-height: 20px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    background-color:#f55251;;
}
.goodsCount span.active {
    background: #58b3e7;
}
.goodsCount em {
    display: block;
    height: 20px;
    width: 20px;
    text-align: center;
    font-style: normal;
    float: left;
}

.goodsCount span{
    display: block;
    width: 20px;
    height: 20px;
    background: #999;
    text-align: center;
    float: left;
    font-size: 15px;
    line-height:20px;
    position: relative;
    border-radius: 50%;
}

.cartWrap .listItemBtm {
    position: relative;
    width: 100%;
    padding: .1rem 0;
    background: #f0f9ff;
    border-bottom: 1px solid #efefef;
}
/* 结算 */
.cartFixedBtm{
    position: fixed;
    right: 0;
    bottom: 48px;
    left: 0;
    width: 100%;
    height:45.25px;
    background: #fff;
    border-top: 1px solid #efefef;
    font-size: .3rem;
    color: #424e5a;
}
.cartFixedBtm .cartCheckAll {
    float: left;
    height: 45px;
    line-height: 45px;
    padding-left: 10.24px;
}
.cartFixedBtm .cartCheckAll input{
    float: left;
    display: inline-block;
    width: 16px;
    height: 16px;
    
    margin: 14.507px 3.43px 0 0;
    
}
.cartFixedBtm .cartTotal {
    float: left;
     height: 45px;
    line-height: 45px;
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    margin-left: 10.24px;
}
.cartFixedBtm .cartFixedRight {
    float: right;
    width:170px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    color: #fff;
    
}
.cartFixedBtm .cartFixedRight span{
    display: inline-block;
    height: 46px;
    width: 60px; 
    font-size:10px;
    line-height: 46px;
}
.cartFixedBtm .cartFixedRight span:nth-child(1){
    background: linear-gradient(150deg,rgba(55,150,208,.9),#36c);
   
}
.cartFixedBtm .cartFixedRight span:nth-child(2){
    background: red;
   
}
</style>

