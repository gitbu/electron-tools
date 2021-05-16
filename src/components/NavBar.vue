<template>
  <div>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu v-for="menu of menuConfig" :key="menu.path">
          <template #title><i :class="menu.icon"></i>{{menu.title}}</template>
          <el-menu-item-group v-for="group of menu.group" :key="group.path">
            <template #title>{{group.title}}</template>
            <el-menu-item v-for="groupItem of group.childen" :key="groupItem.path">
              <router-link :to="groupItem.path">
                {{groupItem.title}}
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
  export default {
    props: {
      menuConfig: {
        type: Array,
        default: function() {
          return [];
        },
      }
    }
  }
</script>

<style scoped>

</style>