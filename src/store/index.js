import Vue from 'vue'
// 注入Vuex
import Vuex from 'vuex'
Vue.use(Vuex);
import home from './home';
import cart from './cart';
import mine from './mine';
import search from './search';
export default new Vuex.Store({
  modules: {
    home,
    cart,
    mine,
    search
  }
})
