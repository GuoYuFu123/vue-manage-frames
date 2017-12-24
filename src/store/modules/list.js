import {product} from '@/services'

export default {
    state:{
        listData:[]
    },

    getters:{
        listData:state => state.listData
    },

    mutations:{
        LISTDATA (state,{listData,page}){
            state.listData = listData
        }
    },

    actions:{
        getListData({commit},params={}){
            //const {page} = params
            product.getListData(params).then(res=>{
               // console.log(res.data)
                commit('LISTDATA',{listData:res.data})
            })
        }
    }

}