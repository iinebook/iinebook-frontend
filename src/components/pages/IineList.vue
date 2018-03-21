<template>
  <div>
    <app-bar/>
    <main-nav/>
  </div>
</template>

<script>
  import AppBar from '../layout/AppBar';
  import MainNav from '../layout/MainNavigation';

  export default {
    components: {AppBar, MainNav},
    name: "iine-list"
  }
</script>

<style scoped>

</style>
