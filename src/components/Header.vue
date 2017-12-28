<template>
    <div class = "header">
        <h1>XXXXXXXXX系统</h1>

        <div class = "user-box">
            <el-dropdown trigger="click" @command="handerUser">
                <span class="el-dropdown-link">
                    <img class="user-img" src="../assets/logo.png" alt="加载失败">
                    <i class="user-name">{{user}}</i>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="user">用户信息</el-dropdown-item>
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Header",
        data(){
            return{
                user:'fgy'
            }
        },
        methods:{
            handerUser(command){
                if(command == "user"){
                    alert("用户信息")
                }else if(command == "loginout"){
                    alert("退出")
                }    
        
            }
        }
    }
</script>

<style lang="" scoped>
.header{padding:20px 20px 20px 0;}
h1{float:left;font-size:18px;padding-left:300px;font-weight: 600;font-size:20px;color: white}
.user-box{float:right;}
.user-img{width:30px;height:30px;float:left;border-radius: 15px;border:1px solid white}
.user-name{padding-left:5px;padding-right:5px;color: white}
.el-icon-arrow-down{color: white}
</style>