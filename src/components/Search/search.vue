<template>
    <div id='search'>
        <div class="search-wrapper">
            <div  class="input-wrapper">
                <span  class="icon iconfont icon-search"></span>
                <span  class="icon iconfont icon-close-b" style="display: none;"></span>
                <input  placeholder="搜索商品">
            </div>
            <div  class="button-wrapper" style="">
                <a  class="search-btn cancel-btn">取消</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style  scoped>
@import url("../../../static/swiper.css");

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
.search-wrapper .input-wrapper .icon-search {
  display: inline-block;
  /* position: absolute; */
  font-size: 0.4rem;
  color: #bbb;
  /* top: 0;
  left: 10px; */
  width: 20px;
  height: 20px;
  transform: translateY(-49%);
  z-index: 10;
}
.search-wrapper .input-wrapper .icon-close-b.icon-close-b,
.search-wrapper .input-wrapper .icon-search.icon-close-b {
  right: 0.2rem;
  color: #aaa;
}
.search-wrapper .input-wrapper input {
  display: inline-block;
  height: 30px;
  text-indent: 0.5rem;
  /* box-sizing: border-box; */
  border-radius: 0.26rem;
  line-height: 0.4rem;

  width: 80%;
  color: #444;
  background-color: #e4e5e7;
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

