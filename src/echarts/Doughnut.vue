<template>
    <div class="line1">
        <div id="doughnut" class="" style="width: 90%;height:450px;"></div>
    </div>
</template>

<script>
     import echarts from 'echarts/lib/echarts';

    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('doughnut'));
            this.initData();
        },
        // props: ['sevenDate', 'sevenDay'],
        methods: {
            initData(){
                const colors = ['#5793f3', '#675bba', '#d14a61'];
                const option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        }
                    ]
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
