<template>
  <div class="main-tab">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#404a68"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item index="1" class="nav-item">
          <icon name="heart" scale="2"/>
      </el-menu-item>
      <el-menu-item index="2" class="nav-item">
          <icon name="book" scale="2"/>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "main-tab",
    data() {
      return { activeIndex: "1" };
    }
  }
</script>

<style scoped>
  .nav-item {
    width: 50%;
  }

</style>
