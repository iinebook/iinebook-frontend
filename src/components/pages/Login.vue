<template>
  <div class="login">
    <div class="logo">
      <h1>iinebook</h1>
    </div>
    <div class="description">
      <span>iinebook は</span>
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
      <el-button type="primary" class="twitter-auth" @click="loginViaTwitter">
        <div>
          <icon name="twitter"/>
          <span>Twitter で登録/ログイン</span>
        </div>
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    created: function() {
      let twitter = OAuth.create('twitter');
      if (twitter) {
        this.$router.push('/iines');
      }
    },
    methods: {
      loginViaTwitter() {
        OAuth.popup("twitter", {cache: true}).done(result => {
          console.log(result);
          this.$router.push('/iines');
        }).fail(error => {
          console.error(JSON.stringify(error));
        });
      }
    }
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

  .logo h1 {
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

  .description span {
    font-size: 18px;
    font-weight: 400;
    padding: 25px 0;
  }

  .line span {
    margin-right: 30px;
  }

  .line {
    display: flex;
    align-items: center;
  }

  .buttons {
    background-color: #404a68;
    min-height: 200px;
    padding-top: 50px;
  }

  .buttons p {
    margin-top: 10px;
    color: white;
  }

  .twitter-auth {
    border-radius: 8px;
  }

  .twitter-auth div {
    display: flex;
    align-items: center;
  }

  .twitter-auth span {
    padding-left: 5px;
  }
</style>
