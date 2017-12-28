<template>
    <div class="line1">
        <div id="radar" class="" style="width: 90%;height:450px;"></div>
    </div>
</template>

<script>
     import echarts from 'echarts/lib/echarts';

    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('radar'));
            this.initData();
        },
        //props: ['sevenDate', 'sevenDay'],
        methods: {
            initData(){
                const colors = ['#5793f3', '#675bba', '#d14a61'];
                const option =  {
                    title: {
                        text: '基础雷达图'
                    },
                    tooltip: {},
                    legend: {
                        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                    },
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                        }
                        },
                        indicator: [
                        { name: '销售（sales）', max: 6500},
                        { name: '管理（Administration）', max: 16000},
                        { name: '信息技术（Information Techology）', max: 30000},
                        { name: '客服（Customer Support）', max: 38000},
                        { name: '研发（Development）', max: 52000},
                        { name: '市场（Marketing）', max: 25000},
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '预算分配（Allocated Budget）'
                            },
                            {
                                value : [5000, 14000, 28000, 31000, 42000, 21000],
                                name : '实际开销（Actual Spending）'
                            }
                        ]
                    }]
                };
                this.myChart.setOption(option);
            }
        },
        // watch: {
        //     sevenDate: function (){
        //         this.initData()
        //     },
        //     sevenDay: function (){
        //         this.initData()
        //     }
        // }
    }
</script>

<style lang="" scoped>

    .line1{
        display: flex;
        justify-content: center;
    }
</style>