<template>
<div class="side-menu">
    <el-row class="tac">
        <el-col>
            <el-menu
            :router='true'	
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
                <!--首页导航-->
                <el-menu-item index="/home">
                    <i class="el-icon-location"></i>
                    <span slot="title">主页面</span>
                </el-menu-item>
                <!--客户管理-->
                <el-submenu index="/list">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>客户管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/cusSearch">客户查询</el-menu-item>
                        <el-menu-item index="/customer">客户视图</el-menu-item>
                        <el-menu-item index="/cusRecommend">推荐客户</el-menu-item>
                        <el-menu-item index="/customer">客户推荐查询</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <!--导航三-->
                <el-submenu index="/detail">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>账户管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <!--导航四-->
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>首页</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>

            </el-menu>
        </el-col>
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