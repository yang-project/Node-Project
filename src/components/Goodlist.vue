<template>
    <div id='list'>
        <div  class="wrapper">
            <div class="boxtab">
                <div id='list_search'>
                  <search></search>
                </div>
                
                <ul  class="tab">
                    <li  class="">新品</li> 
                    <li  class="active">销量</li> 
                    <li  class="">价格
                    <span  class="icon iconfont icon-asc"></span>
                    </li>
                </ul> 
            </div>
            <div  class="scroll-view">
                    <ul  class="scroll-list" >
                        <li  class="list-wrapper" v-for='item in goodlist' :key='item.id'  @click="goto('Datail',item.id)" >
                                <div  class="list-box">
                                    <div  class="left">
                                        <img  :src="item.thumbnail">
                                    </div> 
                                    <div  class="right">
                                        <span  class="goods-name">{{item.title}}（袋装）</span>
                                        <p  class="goods-price">¥{{((item.minPrice)/100).toFixed(2)}}</p>
                                        <span  class="goods-site">自营</span>
                                    </div>
                                </div>
                            
                        </li>
                    </ul>    
                
            </div>
        </div>
    </div>

 
</template>
<script>
import search from "./Search/search.vue";
export default {
  data() {
    return {
      goodlist: [],
      thridCategoryId: this.$route.query.thridCategoryId
    };
  },
   components: {
    // 第二步：局部注册组件
    search
  },
  created() {
    console.dir(this.id);

    this.$axios
      .get(
        "/api/f/app/s_10020/goods/list/json?keywords=&pageIndex=1&thridCategoryId=" +
          this.thridCategoryId
      )
      .then(res => {
        //s
        let data = res.data.data;
        this.goodlist = data;
        console.log(this.goodlist);
        // console.log(res.data.data[0]);
        // console.log(res.data.data[0].leaf);
      })
      .catch(() => {
        // Indicator.close();
      });
  },
  methods: {
    goto(name, index) {
      // 列表页传参给详情页
      this.$router.push({ name: name, query: { id: index } });
    }
  }
};
</script>
<style>
#list {
  width: 320px;
}

#list .wrapper .boxtab {
   position: fixed;
   top: 0;
   z-index: 3;

  height: 154px;
  width: 100%;
}
#list .wrapper  .boxtab #list_search{
  height: 41px;
}
.wrapper .tab {
 
  
  width: 100%;
  height: 56px;
  line-height: 56px;
  display: flex;
  border-bottom: 1px solid #ddd;
  z-index: 10;
  background-color: #fff;
}
.wrapper .tab li {
  list-style: none;
  color: #444;
  flex: 1;
  font-size: 14px;
  text-align: center;
}
#list .scroll-view {
  width: 100%;
}
#list .scroll-view .list-wrapper {
  list-style: none;
  height: 80px;
  padding: 10px 12px;
  border-bottom: 1px solid #ddd;
  position: relative;
}
#list .list-wrapper .list-box {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.list-box .left {
  width: 25%;
  height: 80px;
  /* display: flex; */

  margin-right: 10px;
}
.list-box .left img {
  width: 100%;
  height: 80px;
}
.list-box .right {
  flex: 1;
}
</style>


