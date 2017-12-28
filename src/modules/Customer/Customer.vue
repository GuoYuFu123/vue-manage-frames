<template>
<div class='box'>
    <!--头部搜索栏-->
    <div class='box-header'>
        <!--模糊查询搜索框-->
        <el-input
        placeholder="客户名称,地址,电话等"
        v-model="fuzzyQuery"
        clearable
        class="fuzzyQuery">
        </el-input>
        <!--查询日期-->
        <div class="search-date">
            <span>开始日期</span>
            <el-date-picker
            size='small'
            v-model="startDate"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
            <span>结束日期</span>
            <el-date-picker
            size='small'
            v-model="endDate"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
        </div>
        <!--客户类别-->
        <div class='customer-type'>
              <el-select v-model="typeValue" placeholder="客户类别">
                <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
    <!--主体内容-->
    <div class='box-con'>
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
            prop="contractDate"
            label="签约日期">
            </el-table-column>
            <el-table-column
            prop="tradeFrequency"
            label="交易频次">
            </el-table-column>
            <el-table-column
            prop="refundMoney"
            label="退货金额">
            </el-table-column>
            <el-table-column
            prop="refundRate"
            label="退货率">
            </el-table-column>
            <el-table-column
            prop="avePayment"
            label="平均付款账期">
            </el-table-column>
            <el-table-column
            prop="customerRank"
            label="客户评级">
            </el-table-column>
            <el-table-column
            prop="remark"
            label="备注">
            </el-table-column>
            <el-table-column
            prop="switch"
            label="推荐开关">
            </el-table-column>
        </el-table>
    </div>
    <!--分页器-->
    <div class='box-footer'>
    </div>
    
</div>
</template>

<script>
    export default {
        data() {
            return {
                
                fuzzyQuery: '',                          //模糊查询字符                          
                
                startDate: '',                           // 查询日期数据
                endDate: '',
                // 客户类别数据
                typeOptions: [
                    {
                        value: '选项1',
                        label: '饲料原料供应商'
                    }, 
                    {
                        value: '选项2',
                        label: '饲料销售客户'
                    }
                ],
                typeValue: '',
                //表格数据
                tableData: [
                    {
                    customerCode: '12312313',
                    customerName: '王小虎',
                    customerType: '饲料销售客户',
                    customerStatus: '推荐',
                    contractDate: '2021-2-3',        //签约日期
                    tradeFrequency: '频繁',          //交易频次
                    refundMoney: '7688',            //退款金额
                    refundRate: '50%',              //退货率
                    avePayment: '10天',             //平均退款账期
                    customerRank: 'A',               //客户评级
                    remark: 'wqe',                   //备注
                    switch: '111'                    //开关
                    },
                    {
                    customerCode: '12312313',
                    customerName: '王小虎',
                    customerType: '饲料销售客户',
                    customerStatus: '推荐',
                    contractDate: '2021-2-3',        //签约日期
                    tradeFrequency: '频繁',          //交易频次
                    refundMoney: '7688',            //退款金额
                    refundRate: '50%',              //退货率
                    avePayment: '10天',             //平均退款账期
                    customerRank: 'A',               //客户评级
                    remark: 'wqe',                   //备注
                    switch: '111'                    //开关
                    },
                    {
                    customerCode: '12312313',
                    customerName: '王小虎',
                    customerType: '饲料销售客户',
                    customerStatus: '推荐',
                    contractDate: '2021-2-3',        //签约日期
                    tradeFrequency: '频繁',          //交易频次
                    refundMoney: '7688',            //退款金额
                    refundRate: '50%',              //退货率
                    avePayment: '10天',             //平均退款账期
                    customerRank: 'A',               //客户评级
                    remark: 'wqe',                   //备注
                    switch: '111'                    //开关
                    }, 
                    
                ]
            }
        }
    }
</script>

<style lang="" scoped>
    .box{padding:5px;}
    .box-header{padding:5px;}
    .fuzzyQuery{width:100px;}
    .search-date,.customer-type{display:inline-block;}

    .customer-type{width:150px;}
    
</style>
