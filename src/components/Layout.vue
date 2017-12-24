<template>
  <div class = "system">
    <!--头部-->
    <div class="system-header">
      <v-header></v-header>
    </div>

    <div class = "system-con">
      <!--侧边栏-->
      <div class = "system-side">
        <v-side-menu></v-side-menu>
      </div>
      <!--主体-->
      <div class = "system-main">
        <router-view></router-view>
      </div>

    </div>
  </div>

</template>

<script>
import vHeader from './Header'
import vSideMenu from './SideMenu'

export default {
  name: 'Layout',
  data () {
    return {
     
    }
  },
  components:{
    vHeader,
    vSideMenu,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.system{width:100%}
.system-con{width:100%;display:flex;}
.system-header{background:#ccc;height:60px;background: black}
.system-side{width:20%;margin: 10px;}
.system-main{width:80%;background:red;margin:10px;border: 1px solid #e6e6e6;border-radius: 8px;}

</style>
