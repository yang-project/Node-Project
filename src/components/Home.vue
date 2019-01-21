<template>
    <div id='main'>
      <!-- :class="isFixed== true?'isFixed':''" -->
         <div id='header'>
            <search_a ></search_a>
           
         </div>
         <div class='main'> 
            <swipe></swipe>
            <div  class="line"></div>
            <Menu></Menu>
            <div  class="line"></div>
            <three></three>
            <div  class="line"></div>
            <miaosha></miaosha>
            <div  class="line"></div>
            <shops></shops>
            <div  class="line"></div>
            <ydyiyao></ydyiyao>
            <div  class="line"></div>
            <diff></diff>
            <div  class="line"></div>
            <recommend></recommend>
         </div>
        <div id='bottom'>

          <div class="no-data">
              <div class="no-data-content">
                <p> 没有啦 </p>
              </div>
          </div>
  <!-- 底部 -->
          <footer  id="foot">
            <div  id="footer">
              <nav  class="download_link">
                <a >下载客户端</a>
                </nav> 
                <p >
                    豫备案号ICP备14026278-1
                    <a  href="/zizhi" style="color: rgb(0, 147, 231);">资质证书</a>
                </p> 
                <p >版权信息：河南优德大药房连锁有限公司</p>
              </div>
          </footer>
  <!-- 回到顶部 -->
        </div>
<!-- 没有啦 -->
        <div   class="go-top-wrapper" style="">
          <i  class="icon iconfont icon-top"></i>
        </div>
    </div>
</template>
<script>
import search_a from "./Home/search_a.vue";
import swipe from "./Home/swipe.vue";
import Menu from "./Home/menu.vue";
import three from "./Home/three.vue";
import miaosha from "./Home/miaosha.vue";
import shops from "./Home/shops.vue";
import ydyiyao from "./Home/ydyiyao.vue";
import diff from "./Home/diff.vue";
import recommend from "./Home/recommend.vue";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.state.home.show = true;
  },
  components: {
    // 第二步：局部注册组件
    search_a,
    swipe,
    Menu,
    three,
    miaosha,
    shops,
    // 引入第三个轮播图今日团购
    ydyiyao,
    diff,
    recommend
  }
};
</script>
<style>
#main .line {
  height: 10px;
  background-color: #f0f1f3;
}
/* 尾部样式 */
.no-data {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  height: 40px;
}
.no-data-content {
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: #f5f5f5;
}
.no-data .no-data-content p {
  text-align: center;
    line-height: 20px;
    position: absolute;
    top: 10px;
    width: 100px;
    left: 50%;
    margin-left: -50px;
    color: #d3d3d3;
    font-size: 14px;
    display: block;
    background: #f5f5f5;
    z-index: 2;
}
/* 回到顶部 */
#main .go-top-wrapper {
  position: fixed;
  display: -ms-flexbox;
  display: flex;
  box-sizing: border-box;
  bottom: 52px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: hsla(0, 0%, 100%, 0.6);
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid #efefef;
  box-shadow: 1px 1px 1px #efefef;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
/* 回到顶部的图标设置*/
#main .go-top-wrapper .icon-top {
  display: block;
  font-size: 16px;
  color: #686868;
  font-weight: 700;
}
/* footery样式 */
#foot {
  position: inherit;
  padding-bottom: 45px;
}
#foot #footer{
  width: 100%;
  background-color: #f5f5f5;
  padding-bottom: 18px;
  padding-top: 12px;
  text-align: center;
}
#footer .download_link {
  margin: 5px 0;
}

#footer p {
  font-size: 12px;
  color: #b6b6b6;
  line-height: 18px;
}

#footer .download_link  a {
  color: #7e8c8d;
  -webkit-backface-visibility: hidden;
  text-decoration: none;
  color: rgb(0, 147, 231);
}
#footer p {
  font-size: 12px;
  color: #b6b6b6;
  line-height: 18px;
}
</style>


