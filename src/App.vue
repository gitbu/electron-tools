
<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <nav-bar :menuConfig="menuConfig" />
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import menuConfig from './config/menu';
  import NavBar from './components/NavBar';
  export default {
    components: {
      NavBar
    },
    created() {
      this.menuConfig = menuConfig;
    }
  }
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
