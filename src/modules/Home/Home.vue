<template>
    <div>
        <v-header-nav></v-header-nav>
		<section class="data_section">
			<header class="section_title">数据统计</header>
			<el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{"1"}}</span> 新增用户</div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{"orderCount"}}</span> 新增订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{"adminCount"}}</span> 新增管理员</div></el-col>
			</el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{"allUserCount"}}</span> 注册用户</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{"allOrderCount"}}</span> 订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{"allAdminCount"}}</span> 管理员</div></el-col>
            </el-row>
		</section>
		<!--趋势图-->
	
			<v-tendency :sevenDate='[[1,2,30],[1,2,30],[5,6,70],[23,45,56]]' :sevenDay='["2017-12-20", "2017-12-21", "2017-12-22", "2017-12-23", "2017-12-24", "2017-12-25", "2017-12-26"]'></v-tendency>
		
	
		<v-doughnut></v-doughnut>
	
		<v-clumnar></v-clumnar>
		<v-bar></v-bar>
		
	</div>
</template>

<script>
	import vHeaderNav from '@/components/HeaderNav'
    import vTendency from '@/echarts/Tendency' 
	import vDoughnut from '@/echarts/Doughnut'
	import vClumnar from '@/echarts/Clumnar'
	import vBar from '@/echarts/Bar'

    export default {

    	components: {
    		vHeaderNav,
    		vTendency,
			vDoughnut,
			vClumnar,
			vBar
    	},

    }
</script>

<style lang="">

</style>