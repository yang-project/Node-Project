// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入iconfont字体图标
import "./assets/iconfont/iconfont.css";
// 引入store
import store from './store'
// 引入axios
import axios from 'axios'
// 将axios引入原型链
Vue.prototype.$ajax = axios;
/* eslint-disable no-new */
// 引入swipe轮播图插件
import Swiper from "swiper"
// 引入swipe样式
import "swiper/dist/css/swiper.css"
import './scss/base.css'
new Vue({
  el: '#app',
  router,
  // 将store注入到跟实例中
  store,
  components: {
    App
  },
  template: '<App/>'
})
