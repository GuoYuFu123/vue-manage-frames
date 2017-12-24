import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list';

// 导入store

Vue.use(Vuex)

const store = new Vuex.Store({
    'modules':{
        list
    }
})

export default store