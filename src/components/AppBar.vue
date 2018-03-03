<template>
  <div class="bar">
    <div></div>
    <div>
      <span>iinebook</span>
    </div>
    <div>
      <el-button class="login-button" type="info" @click="handleClickLogin">登録/ログイン</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app-bar",
    methods: {
      handleClickLogin() {
        router.push("/");
      }
    }
  }
</script>

<style scoped>
  .bar {
    background-color: #404a68;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bar span {
    color: white;
    font-size: 18px;
  }

  .bar div {
    width: 33%;
  }

  .bar div:last-child {
    display: flex;
    justify-content: flex-end;
  }

  .login-button {
    margin-right: 10px;
  }
</style>
