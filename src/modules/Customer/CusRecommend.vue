<template>
<div>
    <v-header-nav></v-header-nav>
    <div class="rec-box">

        <!--穿梭框-->
        <el-transfer
        v-model="value1" 
        :data="data"
        :titles="['候选资金渠道','已推荐资金渠道']"></el-transfer>
        <div class="btn">
            <el-button type="primary">推荐</el-button>
        </div>
        
    </div>
</div>
</template>

<script>
    import vHeaderNav from '@/components/HeaderNav'

    export default {
        name:'CusRecommend',
        data(){
            const generateData = _ => {
                const data = [];
                for (let i = 1; i <= 6; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${ i }`,
                    //disabled: i % 4 === 0
                });
                }
                return data;
            };
            return{
                data: generateData(),
                value1: [1,4]
            }
        },
        components:{
            vHeaderNav
        }
    }
</script>

<style lang="" scoped>
    .rec-box{padding:20px 300px;}
    .btn{}
</style>