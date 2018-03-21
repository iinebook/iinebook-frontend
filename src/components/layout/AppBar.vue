<template>
  <div class="bar">
    <div></div>
    <div>
      <span>iinebook</span>
    </div>
    <div>
      <el-dropdown trigger="click" @command="handleCommandUserMenu">
        <img class="user-icon" src="https://pbs.twimg.com/profile_images/828293307146964992/LHn9agKN_bigger.jpg" />
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
            OAuth.clearCache();
            this.$router.push("/");
        }
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
    font-size: 16px;
  }

  .bar div {
    width: 33%;
  }

  .bar div:last-child {
    display: flex;
    justify-content: flex-end;
  }

  .user-icon {
    margin-right: 10px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    height: 35px;
    width: 35px;
  }

  .user-icon:hover {
    cursor: pointer;
  }
</style>
