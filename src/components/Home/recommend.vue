<template>
    <div id='recommend' >  
        <div  class="recommendTitle" >
          <img  src='' /> 
          <span >为您推荐</span>
        </div> 
       <div  class="recommendCont clearfix">
          <div  class="recommendList" v-for="item  in recommend"
          :key="item.id">
            <div  class="inner" >
                  <div  class="recommendListImg">
                    <img :src="item.thumbnail" class="recommendImgSize">
                  </div>
                  <span class="recommendListTitle">
                    {{item.title}}
                  </span>
                  <span class="recommendListPrace">￥
                      <span> {{((item.maxPrice)/100).toFixed(2)}}</span>
                  </span>              
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
      .get("/api/f/app/s_10020/goods/recommend/list?pageIndex=1")
      .then(res => {
        //s
        let data = res.data.data;
        this.recommend = data;

        console.log(data[0].maxPrice);
      })
      .catch(() => {
        // Indicator.close();
      });
  }
};
</script>
<style scoped>
#recommend {
  width: 320px;
  /* height: 4018px; */
}
#recommend .recommendTitle {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-bottom: 1px solid #f4f4f4;
}
#recommend .recommendTitle img {
  width: 20px;
  height: 20px;
  vertical-align: -3px;
  margin-right: 10px;
}
#recommend.recommendTitle span {
  font-size: 16px;
  font-weight: 700;
  color: #594c52;
}
#recommend .recommendCont {
  padding-bottom: 0;
}
#recommend .recommendCont .recommendList {
  width: 50%;
  float: left;
  box-sizing: border-box;
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  border-top: 1px solid #e9e9e9;
  margin-bottom: -1px;
}
#recommend .recommendCont .recommendList .inner {
  padding: 10px;
}
#recommend .recommendCont .recommendList img {
  width: 100%;
  text-align: center;
}
#recommend .recommendCont .recommendList span {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#recommend .recommendCont .recommendList .recommendListTitle {
  color: #313131;
  display: block;
}
#recommend .recommendCont .recommendList .recommendListPrace {
  color: red;
}
</style>


