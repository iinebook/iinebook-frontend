<template>
  <div class="login">
    <div class="logo">
      <h1>iinebook</h1>
    </div>
    <div class="description">
      <span>iinebook は、</span>
      <div class="line">
        <span>
          いいねしたツイートを検索したり、
        </span>
        <icon name="search" scale="2"/>
      </div>
      <div class="line">
        <span>
          カテゴリ毎にまとめたりできます。
        </span>
        <icon name="book" scale="2"/>
      </div>
    </div>
    <div class="buttons">

    </div>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped>
  .login {
    background-color: #404a68;
  }

  .logo {
    color: #fff;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 36px;
  }

  .description {
    background-color: #fff;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    padding: 25px 0;
    margin-right: 30px;
  }

  .line {
    display: flex;
    align-items: center;
  }
  .buttons {
    background-color: #404a68;
    min-height: 200px;
  }
</style>
