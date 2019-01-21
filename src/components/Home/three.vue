<template>
    <div id='Three'>
        <ul class="ind_navi"  >
            <li v-for="item in recommend" :key="item.id">
                <a>
                    <i>
                        <img :src="JSON.parse(item.banner).path">
                    </i>
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
    this.$axios
      .get("/api/f/app/s_10020/advertising/list?type=19")
      .then(res => {
        //s
        let data = res.data.data;
        this.recommend = data;
        // 判断数据类型函数
        // function isArray(o) {
        //   return Object.prototype.toString.call(o) === "[object Array]";
        // }, JSON.parse(data[0].banner)
        // console.log(JSON.parse(res.data.data[0].banner).path);
      })
      .catch(() => {
        // Indicator.close();
      });
  }
};
</script>
<style scoped>
#Three {
  font-size: 16px !important;
  height: 132px;
  width: 100%;
    /* 布局改动 */
}

#Three ul {
  /* 布局改动 */
  display:flex;
  padding: 3% 0;
  top: 0;

  text-align: center;
  justify-content: space-between;
}
#Three ul li {
  list-style: none;
  /* text-decoration: none; */
  float: left;
  width: 98.16px;
  height: 119px;
  margin-right: 0.5rem;
  margin-bottom: 10px;
}
#Three ul li a {
  display: inline-block;
  width: 100%;
  font-size: 14px;
  color: #5e5e5e;
  font-family: \\9ed1\4f53;
  text-decoration: none;
}
#Three ul li a i {
  display: block;
  margin: 0 auto 8px;
  width: 100%;
  height: 119px;
  font-style: normal;
}
#Three ul li a i img {
  width: 100%;
  height: 119px;
}
</style>


