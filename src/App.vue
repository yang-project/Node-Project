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
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";
import "./scss/common.css";
import axios from 'axios';

// 把axios写入Vue的原型对象，方便后面调用
Vue.prototype.$axios = axios;
// 注入拦截器 全局
// loading效果 
import { Indicator } from 'mint-ui';
axios.interceptors.request.use(config => {
    Indicator.open('loading');
    console.log('config:',config);
    // config.params.token = '10086';
    return config
}, error => {
    Indicator.close();
    
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
    // 响应成功关闭loading
    Indicator.close();
    return data
}, error => {
    Indicator.close();
    return Promise.reject(error)
})

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
    // console.log( '11'+this.$store);
  }
};
</script>

<style>
#app {
  width: 100%;
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
