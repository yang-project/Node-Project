
<template>
    <div id='main'>
      <!-- :class="isFixed== true?'isFixed':''" -->
         <search ></search>
         <!-- <swipe></swipe> -->
         <div  class="line"></div>
        
<!-- 没有啦 -->
    
    </div>
</template>
<script>
import search from "./Search/search.vue";
export default {
  data() {
    return {};
  },
  components: {
    // 第二步：局部注册组件
    search
  }
};
</script>
<style>
</style>




