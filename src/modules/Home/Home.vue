<template>
    <div>
        {{listData}}
    </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'

export default {
    name:"Home",
    computed:{
        ...mapGetters(["listData"])
    },
    methods:{
        ...mapActions(["getListData"])
    },
    mounted(){
        this.getListData()       
    },

}

</script>

<style scoped>

</style>