<template>
  <div class="bar">
    <div></div>
    <div>
      <span>iinebook</span>
    </div>
    <div>
      <el-dropdown trigger="click" @command="handleCommandUserMenu">
        <el-button class="login-button" type="info" size="mini">登録/ログイン</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">ログアウト</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app-bar",
    methods: {
      handleCommandUserMenu(command) {
        switch(command) {
          case 'logout':
            this.$router.push("/");
        }
      }
    }
  }
</script>

<style scoped>
  .bar {
    background-color: #404a68;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bar span {
    color: white;
    font-size: 16px;
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
