<template>
    <div id='search'>
        <div class="search-wrapper">
           <span  class="icon iconfont icon-fanhui" 
              style=' float:left;
              display: inline-block;
              width: 27px;
              height: 40px;
              font-size:30px;
              z-index: 10;' @click='back' >
           </span>
            <div  class="input-wrapper">
               
                <span  class="icon iconfont icon-xiaoxi--copy" style='font-size:30px'></span>
                <input  placeholder="搜索商品">
            </div>
            <div  class="button-wrapper" style="">
                <a  class="search-btn cancel-btn">取消</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods:{
     back(){

      this.$router.go(-1)

      }
  }
   
};
</script>
<style  scoped>
/* @import url('../../../assets/iconfont/iconfont.css'); */
@import url("../../../static/swiper.css");

#search{
    position: fixed;
    width: 100%;
    /* height: .96rem; */
    height: 47px;
    padding-top: 0;
    line-height: 1.5;
    top: 0;
    left: 0;
    z-index: 100;
    margin: auto;
    right: 0;
    background: #fff;
    border-bottom: 1px solid #e7e7e7;
}
.search-wrapper {
  width: 320px;
  font-size: 0;
  display: flex;
  flex-direction: row;
  height: 41px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 3px 10px;
  background-color: #fff;
  position: fixed;
  top: 1px;
}
.search-wrapper .input-wrapper {
  height: 35px;
  border-radius: 0.26rem;
  flex: 1;
  position: relative;
  margin-right: 10px;
  background-color: #e4e5e7;
  position: relative;
}
.search-wrapper .input-wrapper  .icon-xiaoxi--copy{

}
#search .search-wrapper .input-wrapper .icon-fanhui {
 
}

.search-wrapper .input-wrapper input {
   float:left;
  display: inline-block;
  height: 30px;
  text-indent: 0.5rem;
  /* box-sizing: border-box; */
  border-radius: 0.26rem;
  line-height:30px;
  width: 80%;
  color: #444;
  background-color: #e4e5e7;
  margin-left:2px;
}
/* 取消button */
.search-wrapper .button-wrapper {
  width: 15%;
  height: 41px;
  text-align: center;
  display: flex;

  font-size: 0.2.8em;
}
.search-wrapper .button-wrapper a {
  display: inline-block;
  width: 100%;
  height: 41px;
  text-align: left;
  font-size: 16px;
  line-height: 41px;
}
</style>

