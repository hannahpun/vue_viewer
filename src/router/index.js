import Vue from 'vue'
import Router from 'vue-router'

import Page from '@/components/Page'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
