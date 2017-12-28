<template>
  <div class='container'>
    <v-header></v-header>
    <div class='content'>
      <v-show></v-show>
      <v-login></v-login>
    </div>
    <v-footer></v-footer>   
  </div>
</template>

<script>
import vHeader from './Header'
import vFooter from './Footer'
import vShow from './Show'
import vLogin from './Login'

export default{
    name:'LoginPage',
    components:{
    vHeader,
    vFooter,
    vShow,
    vLogin
    }
}

</script>

<style scoped>
.container{width:1200px;background:#ccc;margin:0 auto;}
.content{height:600px;padding:20px;}
</style>

