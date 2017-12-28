<template>
    <div>
        <v-header-nav></v-header-nav>
        <!--雷达图-->
		<v-radar></v-radar>
    </div>
</template>

<script>
import vHeaderNav from '@/components/HeaderNav'
import vRadar from '@/echarts/Radar'

export default {
    name:"List",
    components:{
        vHeaderNav,
        vRadar,
    }
}
</script>

<style scoped>

</style>