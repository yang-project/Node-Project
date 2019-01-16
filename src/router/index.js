import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import Categroy from '@/components/Categroy'
import Goodlist from '@/components/Goodlist'
import Datail from '@/components/Datail'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/categroy',
      name: 'Categroy',
      component: Categroy
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/goodlist',
      name: 'Goodlist',
      component: Goodlist
    },
    {
      path: '/datail',
      name: 'Datail',
      component: Datail
    },
  ]
})
