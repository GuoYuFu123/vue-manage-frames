// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 全局引入Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入echarts
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/pie';              //饼图
import 'echarts/lib/chart/radar';            //雷达图
import 'echarts/lib/chart/bar';              //条形图
import 'echarts/lib/chart/line';             //线图
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/tooltip';

// 注册Element
Vue.use(ElementUI)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
