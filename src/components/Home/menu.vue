<template>
    <div id='Menu'>
        
        <ul class="ind_navi clearfix"  >
            <li v-for="item in recommend" :key="item.id">
              <a>
                <i>
                  <img :src="JSON.parse(item.banner)[0].path">
                </i>
                {{item.name}}
              </a>
            </li>
        </ul>
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
    this.$ajax
      .get("/api/f/xcx/s_10020/advertising/list?type=4")
      .then(res => {
        //s
        let data = res.data.data;
        this.recommend = data;
        // 判断数据类型函数
        // function isArray(o) {
        //   return Object.prototype.toString.call(o) === "[object Array]";
        // }, JSON.parse(data[0].banner)
        console.log(res);
      })
      .catch(() => {
        // Indicator.close();
      });
  }
};
</script>
<style scoped>
#Menu {
  font-size: 16px !important;
  height: 184px;
}
#Menu ul {
  padding: 3% 0;
  top: 0;
  text-align: center;
}
#Menu ul li {
  list-style: none;
  /* text-decoration: none; */
  float: left;
  width: 25%;
  min-height: 72px;
  margin-bottom: 10px;
}
#Menu ul li a {
  display: inline-block;
  font-size: 14px;
  color: #5e5e5e;
  font-family: \\9ed1\4f53;
  text-decoration: none;
}
#Menu ul li a i {
  display: block;
  margin: 0 auto 8px;
  width: 45px;
  height: 46.6px;
  font-style: normal;
}
#Menu ul li a i img {
  width: 100%;
  height: 45px;
}
</style>


