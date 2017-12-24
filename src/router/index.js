import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'Login',
      component:resolve => require(['@/modules/Login/Login'],resolve)
    },
    {
      path: '/home',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path:'',
          component:resolve => require(['@/modules/Home/Home'],resolve)
        },
        {
          path:'/list',
          component:resolve => require(['@/modules/List/List'],resolve)
        },
        {
          path:'/detail',
          component:resolve => require(['@/modules/Detail/Detail'],resolve)
        }
      ]

    }
  ]
})
