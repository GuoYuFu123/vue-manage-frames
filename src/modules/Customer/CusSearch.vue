<template>
<div>
    <v-header-nav></v-header-nav>
    <div class="search-box">
        <div class="search-case">
            <el-input 
            v-model="searchValue" 
            placeholder="客户名称,地址，电话等"
            :maxlength="30"></el-input>
        </div>            
        <div>
            <el-button type="primary">搜索</el-button>
        </div>
        
    </div>
    <div class='table-con'>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="customerCode"
            label="客户编码"
            width="180">
            </el-table-column>
            <el-table-column
            prop="customerName"
            label="客户名称"
            width="180">
            </el-table-column>
            <el-table-column
            prop="customerType"
            label="客户类型">
            </el-table-column>
            <el-table-column
            prop="customerStatus"
            label="客户状态">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="addBlackList(scope)" type="text" size="small">加入黑名单</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>

</div>
</template>

<script>
    import vHeaderNav from '@/components/HeaderNav'

    export default{
        name:'CusSearch',
        data(){
            return {
                // 查询内容
                searchValue:'',
                // 表格数据
                tableData: [
                    {
                        customerCode: '12312313',
                        customerName: '王小虎',
                        customerType: '饲料销售客户',
                        customerStatus: '推荐',
                    },
                    {
                        customerCode: '12312313',
                        customerName: '王小虎',
                        customerType: '饲料销售客户',
                        customerStatus: '推荐',

                    },
                    {
                        customerCode: '12312313',
                        customerName: '王小虎',
                        customerType: '饲料销售客户',
                        customerStatus: '推荐',
                    }
                ],
                // 单选按钮
                radio:'0'
            }
        },
        components:{
            vHeaderNav
        },
        methods:{
            addBlackList(scope){
                console.log(scope)
                // console.log(row)
            }
        }
    }
</script>

<style lang="" scoped>
    .search-box{padding:5px;display:flex;justify-content:space-between}
    .search-case{width:400px}
    .table-con{padding:5px;}
</style>