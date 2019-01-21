<template>
<!-- 火爆店铺 -->
    <div id='shops'>   
       <div class="recommend">
            <div class="recommendTitle" >
                    <img  src="" alt="" /> 
                    <span>火爆店铺</span>
            </div>
            <div class="hot-scroll">
              <div class="recommendCont">
                  <div  class="recommendList">
                      <div class="inner shop_container" v-for="item in recommend" :key="item.id">
                           <div  class="shop_name">{{item.name}}</div>
                          <img  :src="item.logo"  class="shop_logoimg" />
                         
                      </div>
                  </div>
              </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
  data() {
    return {
      recommend: []
    };
  },
  created() {
    // 以/dbapi开头的请求，进入到代理服务器（webpack配置）
    // /dbapi/in_theaters  -> http://api.douban.com/v2/movie/dbapi/in_theaters -> http://api.douban.com/v2/movie/in_theaters
    this.$axios
      .get("/api/f/app/s_10020/cmsSite/list/json")
      .then(res => {
        //s
        let data = res.data;
        this.recommend = data;
        // 判断数据类型函数
        // function isArray(o) {
        //   return Object.prototype.toString.call(o) === "[object Array]";
        // }, JSON.parse(data[0].banner)
        console.log(data);
      })
      .catch(() => {
        // Indicator.close();
      });
  }
};
</script>
<style scoped>
#shops {
  font-size: 16px !important;
  height: 184px;
}
.recommendTitle {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-bottom: 1px solid #f4f4f4;
}
.recommendTitle img {
  width: 20px;
  height: 20px;
  vertical-align: -3px;
  margin-right: 10px;
}
.recommendTitle span {
  font-size: 16px;
  font-weight: 700;
  color: #594c52;
}

.recommend .hot-scroll {
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
}
</style>


