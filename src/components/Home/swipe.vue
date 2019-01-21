// 轮播图
<template>
    <div id='swipe' class="clearfix">
        <mt-swipe :auto="4000">
        <mt-swipe-item  v-for="item  in recommend"
          :key="item.id">
            <img :src="JSON.parse(item.banner)[0].path" >
        
        </mt-swipe-item>
    </mt-swipe>
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
      .get("/api/f/app/s_10020/advertising/list?type=1")
      .then(res => {
        //s
        let data = res.data.data;
        this.recommend = data;
        // 判断数据类型函数
        // function isArray(o) {
        //   return Object.prototype.toString.call(o) === "[object Array]";
        // }
        // console.log(data, JSON.parse(data[0].banner));
      })
      .catch(() => {
        // Indicator.close();
      });
  }
};
</script>
<style scoped>
#swipe {
  height: 175px;
  width: 100%;
}
#swipe img {
  height: 175px;
  width: 100%;
}
</style>



