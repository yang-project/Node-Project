// 秒杀轮播图
<template>
    <div id='miaosha'>
        <div class="msTitle">
          <div  class="msTitleLeft">
            <img  src=''/>
            <span >秒杀</span>
          </div> 
          <div class="msTitleRight">
             <div class="count-down">
                <span  class="title">距结束:</span>
                <div  class="time-wrapper">
                    <div  class="time-box">
                      <span  style="width: 18px;">{{day}}</span>天
                    </div> 
                    <div  class="time-box">
                      <span  style="width: 18px;">{{hr}}</span>:
                    </div>
                    <div  class="time-box">
                      <span  style="width: 18px;">{{min}}</span>:
                    </div> 
                    <div  class="time-box">
                      <span  style="width: 18px;">{{sec}}</span>
                    </div>
                </div>
            </div>
          </div>  
        </div>
        
        <div class="swiper-container swiper-container-horizontal swiper-container2" id="imgList1">
          <div class="swiper-wrapper" >
            <!-- <div class="swiper-slide"  v-for="item  in recommend"
          :key="item.id" > -->
          <div class="swiper-slide" v-for="item  in recommend"
          :key="item.id" >
              <div class='element'>
                <img :src="item.goodsThumbnail" />
                <p class="msGoods-title">{{item.goodsTitle}}</p>
                <div class='Price'>
                  <p class='sellsprcie'>{{"$"+(item.minGoodsPrice)*1/100}}</p>
                  <p class='beforesprcie'>{{"$"+(item.maxGoodsPrice)*1/100}}</p>
                </div>
              </div>
              
            </div>
          </div>
          <!-- <div class="swiper-pagination swp2"></div> -->
        </div>
    </div>
    
</template>
<script>
import Vue from "vue";
import Swiper from "swiper";
// 引入swipe样式
// import "swiper/dist/css/swiper.css";
// import "swiper/dist/js/swiper.min.js";
import "../../../static/swiper.min.js";
export default {
  data() {
    return {
      recommend: [],
      day: 0,
      hr: 0,
      min: 0,
      sec: 0
    };
  },

  methods: {
    countdown: function() {
      const end = Date.parse(new Date("2019-01-30"));
      const now = Date.parse(new Date());
      const msec = end - now;
      let day = parseInt(msec / 1000 / 60 / 60 / 24);
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      this.day = day;
      this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;
      const that = this;
      setTimeout(function() {
        that.countdown();
      }, 1000);
      // console.log(this.day);
    },
    getlist: function() {
      this.$axios
        .get("/api/f/app/s_10020/periods/indexGoods")
        .then(res => {
          //s
          let data = res.data.data;
          this.$set(this, "recommend", data);
          Vue.nextTick(() => {
            var swiper = new Swiper(".swiper-container2", {
              slidesPerView: 3,
              spaceBetween: 50,
              // pagination: {
              //   el: ".swp2",
              //   clickable: true
              // },
              autoplay: true,
              loop: true
            });
          });
        })
        .catch(() => {
          // Indicator.close();
        });
    }
  },

  created() {
    // 调用请求发送的数据，进行渲染数据
    this.getlist();
    this.countdown();
  },
  mounted() {}
};
</script>
<style scoped>
@import url("../../../static/swiper.css");
#miaosha {
  height: 175px;
  /* width: 320px; */
  width: 100%;
}
#miaosha .miaosha {
  height: 80px;
  width: 100%;
}
#miaosha .miaosha img {
  height: 175px;
  width: 64px;
}
#miaosha .msTitle {
  height: 30px;
  font-size: 16px !important;
}
#miaosha .msTitle .msTitleLeft {
  float: left;
  padding-bottom: 5px;
  border-bottom: 1px solid #f4f4f4;
}
#miaosha .msTitle .msTitleLeft img {
  width: 20px;
  height: 20px;
}
#miaosha .msTitle .msTitleLeft span {
  font-size: 16px;
  vertical-align: 3px;
  margin-left: 10px;
  color: #ef6d6d;
  font-weight: 700;
}
#miaosha .msTitle .msTitleRight {
  float: right;
}
#miaosha .msTitle .count-down,
.time-wrapper {
  display: flex;
}
#miaosha .mint-swipe-indicators {
  display: none;
}
#miaosha .msTitle .count-down .title {
  display: inline-block;
  margin-right: 6px;
}
#miaosha .msTitle .count-down .time-box span {
  display: inline-block;
  text-align: center;
  margin: 0 3px;
  background: #535353;
  letter-spacing: 1px;
  color: #fff;
  border: none;
  padding: 0 2px;
  border-radius: 3px;
}
#miaosha #imgList1 {
  width: 320px;
  height: 150px;
}

#miaosha #imgList1 .swiper-wrapper {
  /* width: 320px; */
  height: 80px;
  width: 100%;
  display:flex;
  justify-content: space-between;
}

#miaosha #imgList1 .swiper-slide {
  list-style: none;
  width: 94px;
  height: 80px;
  /* float: left; */
  color: red;
  font-size: 40px;
  text-align: center;
  /* line-height: 150px; */
}
#miaosha #imgList1 .element {
  position: relative;
}
#miaosha #imgList1 .element .Price {
  position: absolute;
  left: 5px;
  top: 5px;
  margin: 5px;
  padding: 5px;
  background-color: rgba(0, 0, 50, 0.7);
  font-size: 16px;
  color: #fff;
}
#miaosha #imgList1 .element .Price .beforesprcie {
  font-size: 12px;
}

#miaosha #imgList1 .swiper-slide img {
  width: 72px;
  height: 72px;
  /* float: left; */
  color: red;
  font-size: 40px;
  text-align: center;
  line-height: 150px;
}
#miaosha #imgList1 .swiper-slide .msGoods-title {
  display: block;
  font-size: 10px;
  color: #5e5e5e;
  font-family: \\9ed1\4f53;
  text-decoration: none;
}
</style>



