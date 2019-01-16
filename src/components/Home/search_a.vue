<template>
    <div class='header'>
        <div class='logo'>
            <img src="../../img/logo.png">
        </div>
        <div class="page search-list">
            <div data-v-e37d4f68="" class="wapSearch">
                <button  type="submit" class="search_btn"></button>
                <input  type="text"  @click="goto('search')" placeholder="请输入你要搜索的商品" id="keyword" class="search_txt">
            </div>
        </div>
        <div class='search'>
          <img src="../../img/list.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
  name: "search_a",
  methods: {
    // 路由跳转至搜索页
    goto() {
      // 编程式路由导航：获取router实例
      // this.$router  路由实例（包含跳转等方法）
      // this.$route   当前路由信息
      // console.log(this.$route,this.$router)

      this.$router.push({ name: "Search" });
    }
  }
};
</script>
<style>
.header {
  position: fixed;
  width: 100%;
  height: 47px;
  line-height: 1.5;
  top: 0;
  left: 0;
  z-index: 2;
  margin: auto;
  right: 0;
}
.header .logo {
  width: 60px;
  padding-left: 10px;
  /* margin-top: 7px; */
  height: 40px;
  position: absolute;
  left: 0;
}
.header .logo img {
  width: 60px;
  height: 40px;
}
.header .search-list {
  height: 47px;
  position: relative;
  margin: 0 50px 0 75px;
  padding: 6px 0;
  box-sizing: border-box;
  border-radius: 4px;
}
.header .search-list .wapSearch {
  width: 130px;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 35px;
  margin: 0;
  display: block;
  font-size: 0;
}
.header .search-list .wapSearch input {
  border: 0;
  background: 0;
  padding: 5px 0;
  height: 35px;
  font-size: 13px;
  display: inline-block;
  text-align: left;
}
/* 搜索图片没有添加 */
.header .search_btn {
  border: 0;
  /* background: url('../../img/')
    no-repeat; */
  background-size: 18px auto;
  width: 18px;
  height: 18px;
  left: 10px;
  position: absolute;
  top: 50%;
  margin-top: -9px;
}
.header .search_txt {
  width: 100%;
  box-sizing: border-box;
}
.header .search {
  position: absolute;
  right: 10px;
  top: 13px;
}
.header .search img {
  width: 22px;
  height: auto;
  color: red;
}
</style>
