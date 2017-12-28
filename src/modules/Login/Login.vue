<template>
    <div class = "login-con">
        <h2>用户登录</h2>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model.number="ruleForm2.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">                
                <el-input type="password" v-model="ruleForm2.code" auto-complete="off" class="code"></el-input>
                <el-button>{{ruleForm2.checkCode}}</el-button>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default{
        name:'Login',
         data() {
            var checkUsername = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (/^.$/.test(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            var validateCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'));
                } else {
                if (this.ruleForm2.code !== '') {
                    console.log(this.ruleForm2.checkCode)
                    if(value === this.ruleForm2.checkCode){
                        callback()
                    }else{
                        callback(new Error('验证码不一致!'));
                    }
                }
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    username: '',
                    code:'',
                    checkCode:'1234'
                },
                rules2: {
                    username: [
                        { validator: checkUsername, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],                   
                    code : [
                        {validator: validateCode, trigger: 'blur'}
                    ],
                }
            };
            },
            methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm2)
                    alert('submit!');
                } else {
                    alert('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="" scoped>
.login-con{width:500px;height:560px;float:right;background:#ccc;border:1px solid red;padding:20px}
h2{text-align:center;padding:30px 0;font-size:20px;font-weight:600;}
.code{width:150px;margin-right:30px;}
</style>