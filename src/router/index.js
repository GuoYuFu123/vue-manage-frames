import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'Login',
      component:resolve => require(['@/modules/Login/index'],resolve)
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
          path:'/cusSearch',
          component:resolve => require(['@/modules/Customer/CusSearch'],resolve),
          meta:['客户管理','客户查询']
        },
        {
          path:'/cusRecommend',
          component:resolve => require(['@/modules/Customer/CusRecommend'],resolve),
          meta:['客户管理','推荐客户']
        },
        {
          path:'/detail',
          component:resolve => require(['@/modules/Detail/Detail'],resolve)
        },
        {
          path:'/customer',
          component:resolve => require(['@/modules/Customer/Customer'],resolve)
        }
      ]

    }
  ]
})
