import fetchData from './fetch-data'

var product = {
    // 获取数据
    getListData(){
        return fetchData.get('food/getListData')
    },
    // 修改信息
    getChangeNum(params){
        return fetchData.post('product/changeNum',params)
    }
}

export {product}