<template>
  <div>
    <el-menu
      class="main-nav"
      :default-active="$route.path"
      mode="horizontal"
      background-color="#404a68"
      text-color="#fff"
      active-text-color="#fff"
      :router="true"
    >
      <el-menu-item index="/iines" class="nav-item">
          <icon name="heart"/>
      </el-menu-item>
      <el-menu-item index="/iinebooks" class="nav-item">
          <icon name="book"/>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "main-nav"
  }
</script>

<style scoped>
  .main-nav {
  }
  .nav-item {
    width: 50%;
  }
  .nav-item > * {
    height: 25px;
    width: 25px;
  }
</style>
