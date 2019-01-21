<template>
    <div id='diff'>
        <div class="group">
            <div  class="groupListCont groupListContEq" v-for="item in recommend" :key="item.id">
                <img :src="JSON.parse(item.banner).path"/>
            </div>    
        </div>
        <div class='shoushen'>
            <img :src="path" alt="">
        </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      recommend: [],
      path: ""
    };
  },
  created() {
    // 以/dbapi开头的请求，进入到代理服务器（webpack配置）
    // /dbapi/in_theaters  -> http://api.douban.com/v2/movie/dbapi/in_theaters -> http://api.douban.com/v2/movie/in_theaters
    this.$axios
      .get("/api/f/xcx/s_10020/advertising/list?type=2")
      .then(res => {
        //s
        let data = res.data.data;
        this.recommend = data;

        // console.log(typeof data[0].banner);
      })
      .catch(() => {
        // Indicator.close();
      });
    this.$axios
      .get("/api/f/xcx/s_10020/advertising/list?type=3")
      .then(res => {
        //s
        let data = res.data.data;
        this.path = JSON.parse(data[0].banner).path;
        // console.log(typeof data[0].banner);data
        // console.log(data[0].banner);
        console.log(JSON.parse(data[0].banner).path);
      })
      .catch(() => {
        // Indicator.close();
      });
  }
};
</script>
<style scoped>
#diff {
  /* height: 340px; */
  height: 445px;
  padding: 10px;
 
    /* 布局改动 */
     width: 100%;
}
#diff .group .groupListCont:nth-of-type(2n-1) {
  margin-right: 10px;
}
#diff .groupListCont {
  width: 48%;
  float: left;
}
#diff .groupListCont img {
  width: 100%;
  height: 105px;
}
#diff .shoushen {
  width: 300px;
  height: 105px;
  padding: 10px 0;
}
#diff .shoushen img {
  padding: 10px 0;
  width: 300px;
  height: 105px;
}
</style>


