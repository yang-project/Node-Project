<template>
    <div id='datail'>
        <div class='container'>
            <header class="header-container"> 
              <div  class="f_logo">
                  <i class="icon iconfont icon-fanhui" @click='back'></i>
              </div> 
              <div class="title-box">
                  <div class=" titleTab" 
                    v-for='(item,index) in list' :key='item' 
                    @click='toggle(item,index)' 
                    :class="{'active':index===current}" >
                      <span>{{item}}</span>
                  </div>
                
              </div> 
              <div class="right">
                  <i class="icon iconfont icon-star-empty"></i>
              </div>
           </header>
           <div class='main' >
              <mt-swipe :auto="4000" class='swipe'>
                  <mt-swipe-item  v-for="pic  in gooddatail.pictures"  :key="pic.id"
                   >
                      <img :src="pic.ossPicUrl" >
                  </mt-swipe-item>
              </mt-swipe>
              <p class='title'>{{gooddatail.title}}</p>
              <div  class="line"></div>
              <p  class='recommendSpeech'>{{gooddatail.recommendSpeech}}</p>
              <div class='price-wrapper'>
                  <span class='price-Price'>价格：</span>
                  <span class="sell-price">{{"￥"+((gooddatail.minPrice)/1000).toFixed(2)}}</span>
                  <span class='selld'>已售：{{gooddatail.stock}}</span>
              </div>
              <div  class="line"></div>
           </div>
           <div class="bottom-fix">
              <div class='bottom-left'>
                  <div class='bottom-leftA'>
                      <p class='icons'><i  class='icons iconfont icon-iconfontphone17' style='display:inline-block;height:27px;width:27px;font-size:30px;'></i></p>
                      <p class="bottom-title">电话</p>
                  </div>
                  <div class='bottom-leftB' >
                      <p class='icons iconcart'>
                        <i class='icons iconfont icon-cart' style='display:inline-block;height:27px;width:27px;font-size:30px;'></i>
                      </p>
                      <span class='totalnum' ref='totalnum'></span>
                      <p class="bottom-title"  @click="goto('Cart',gooddatail.id)">购物车</p>
                  </div> 
              </div>
              <div  class='bottom-right'>
                  <div class='right-car' @click='add_cart(gooddatail)'>
                        加入购物车
                    </div>
                    <div class='right-buy'>
                        立即购买
                    </div> 
              </div>
           </div>
        </div>
    </div>

 
</template>
<script>
// 获取home中的state的show值
// 先引入
import Vue from 'vue'
export default {
  data() {
    return {
      // 商品信息
      gooddatail: [],
      list: ["商品", "详情", "评论"],
      id: this.$route.query.id,
      // selected: "商品",
      current: 0
    };
  },

  methods: {
    toggle(item, index) {
      this.current = index;
    },
    goto(name){
      this.$router.push({
        name:name,
        id:this.gooddatail.id})

    },
    back(){

      this.$router.go(-1)

      },
  
    add_cart(item){
      this.$store.commit('add',item)
      this.$refs.totalnum.innerText='+'+this.$store.state.cart.number;
      console.log(this.$store.state.cart.cartlist,this.$store.state.cart.number) 

    }
  },
  created() {
    this.$store.state.home.show = false;
    // console.dir(this.id);
    this.$axios
      .get("/api/f/app/s_10020/goods/ajax/goods?id=" + this.id)
      .then(res => {
        //s
        let data = res.data.data;
        this.gooddatail = data;
        console.log(this.gooddatail);
        // console.log(res);
        // console.log(data);
        // console.log(typeof data);
        // console.log(res.data.data[0]);
        // console.log(res.data.data[0].leaf);
      })
      .catch(() => {
        // Indicator.close();
      });
  },
  // destroyed() {
  //   this.$store.state.home.show = true;
  // }
};
</script>
<style scoped>
#datail {
  width: 320px;
}
.header {
  width: 100%;
}
.container {
  width: 100%;
}
.header-container > div {
  float: left;
}
.header-container {
  width: 100%;
  height: 41px;
  line-height: 41px;

  z-index: 2;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
}

.header-container .f_logo {
  /* width: 0.4rem; */
  width: 10%;
  height: 100%;
}

.header-container .f_logo i {
  display: inline;
  font-size: 30px;
  color: #585959;
  font-weight: 700;
  width: 20px;
}
.header-container .title-box {
  width: 245px;
  height: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  border-radius: 3px;
  text-align: center;
}
.header-container .title-box > div {
  float: left;
}
.header-container .title-box .titleTab:first-child {
  border-radius: 3px 0 0 3px;
}

.header-container .title-box .titleTab {
  margin: 5px 0;
  height: 70%;
  width: 50px;
  box-sizing: border-box;
  color: #585454;
  font-size: 0.26rem;
  line-height: 0.52rem;
  background-color: #fff;
  border: 1px solid #377dcc;
  text-align: center;
}
.header-container .title-box .titleTab span {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 26.7px;
}
.header-container .right {
  width: 40px;
  height: 100%;
}
.header-container .title-box .active {
  background-color: #377dcc;
  color: #fff;
}
.swipe {
  width: 256px;
  height: 256px;
  margin: auto;
}
.swipe img {
  height: 256px;
  width: 256px;
}
.line {
  margin: 10px 0;
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
}
.main .title,
.main .recommendSpeech {
  height: 16px;
  width: 300px;
  padding: 5px 10px;
}
.main .price-wrapper {
  height: 28px;
  width: 300px;
  margin: 10px 10px 0;
  background-color: #f2f5f9;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
}

.price-wrapper .price-Price {
  display: inline-block;
  height: 13.8px;
  width: 40px;
  font-size: 0.5em;
  margin-right: 10px;
  line-height: 13.8px;
}
.price-wrapper .sell-price {
  display: inline-block;
  height: 28px;
  width: 80px;
  font-size: 1em;
  margin-right: 30px;
  color: rosybrown;
  font-weight: 999;
  line-height: 18px;
}
.price-wrapper .selld {
  height: 13.8px;
  width: 40px;
  font-size: 0.5em;
}
.bottom-fix {
  width: 320px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
}
.bottom-fix .bottom-left {
  display: flex;
  height: 50px;
  width: 45%;
  flex-direction: row;
  justify-content: space-between;
}


.bottom-fix .bottom-left .bottom-leftA {
  height: 50%;
  width: 62px;
}
.bottom-fix .bottom-left .bottom-leftB{
  position: relative;
}
.bottom-fix .bottom-left .bottom-leftB .totalnum{
position:absolute;
top:0;
right: 17px;
display: inline-block;
width: 20px;
height: 20px;
color:red;
font-size: 18px;
font-weight: 999;
}
.bottom-fix .bottom-right {
  display: flex;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}
.bottom-fix .bottom-right > div {
  height: 100%;
  line-height: 50px;
}
.bottom-fix .bottom-right .right-car {
  background: #4792d1;
  color: #fff;






}
.bottom-fix .bottom-right .right-buy {
  background: #ff5d5d;
  color: #fff;
}
</style>


