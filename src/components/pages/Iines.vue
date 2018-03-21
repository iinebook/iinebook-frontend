<template>
  <div>
    <app-bar/>
    <main-tab/>
  </div>
</template>

<script>
  import AppBar from '../layout/AppBar';
  import MainTab from '../layout/MainTab';

  export default {
    components: {AppBar, MainTab},
    name: "iine-list"
  }
</script>

<style scoped>

</style>
