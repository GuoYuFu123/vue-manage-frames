<template>
<div class="side-menu">
    <el-row class="tac">        
        <el-menu
        :router='true'	
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
            <el-menu-item index="/home">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="/list">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="/detail">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
        </el-menu>            
    </el-row>
</div>
</template>

<script>

    export default{
        name:"SideMenu",
        data(){
            return {
                defaultActive:'/home'
            }
        },
        mounted(){  
            this.defaultActive = this.$route.fullPath
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }


</script>

<style lang="" scoped>
    .el-menu{border: 1px solid #e6e6e6; border-radius: 8px;}
</style>