<template>
  <div id="app">
    <router-view/>
    <div >
        <mt-tabbar class='app' v-model="selected" v-if="$store.state.home.show">
          <mt-tab-item :id="tab.name" v-for='tab in tabs' :key='tab.name'  @click.native='goto(tab.name)'>
              <!-- <i :class="tab.icon"></i>{{tab.text}} -->
              <i :class="['iconfont',tab.icon]"></i>{{tab.text}}
              <!-- <myicons :type="tab.icon"/> {{tab.text}} -->
          </mt-tab-item>
        </mt-tabbar>
    </div>
    
  </div>
</template>
<script>
import Vue from "vue";
// import myicons from "@/plugins/icons";
// Vue.use(myicons);
// 引入mint-ui 全局引入
import MINTUI from "mint-ui";
Vue.use(MINTUI);
// 引入样式
import "mint-ui/lib/style.css";
// 引入公共样式
import "./scss/common.css";
export default {
  name: "App",
  data() {
    return {
      tabs: [
        {
          text: "首页",
          icon: "icon-iconhome2",
          path: "/home",
          name: "Home"
        },
        {
          text: "分类",
          icon: "icon-iconfenlei",
          path: "/categroy",
          name: "Categroy"
        },
        {
          text: "购物车",
          icon: "icon-Add-Cart",
          path: "/cart",
          name: "Cart"
        },
        {
          text: "我的",
          icon: "icon-wode",
          path: "/mine",
          name: "Mine"
        }
      ],
      selected: "Home"
    };
  },
  methods: {
    goto(name) {
      this.$router.push({ name: name });
    }
  },
  created() {
    this.$store.state.home.show = true;
  }
};
</script>

<style>
#app {
  width: 320px;
  height: 568px;
  overflow: auto;
}
.app {
  position: fixed;
  bottom: 0;
  left: 0;
}
.mint-tabbar {
  height: 48px;
}
i {
  display: block;
  text-align: center;
  font-size: 22px;
  height: 24px;
  line-height: 24px;
}
.isActive {
  display: none;
}
</style>
