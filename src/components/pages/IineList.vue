<template>
  <div>
    <div>
      <app-bar/>
      <main-nav/>
    </div>
    <div v-for="fav in favorites">
      <div class="tweet-item">
        <div class="tweet-body">
          <img :src="fav.user.profile_image_url_https"/>
          <div>
            {{ fav.text }}
          </div>
        </div>
        <div class="book-button">
          <icon name="bookmark"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppBar from '../layout/AppBar';
  import MainNav from '../layout/MainNavigation';

  export default {
    components: {AppBar, MainNav},
    name: "iine-list",
    data() {
      return { favorites: {} }
    },
    created: function() {
      let twitter = OAuth.create("twitter");
      if (!twitter) {
        this.$router.push('/');
      }
      let vm = this;
      twitter.get('https://api.twitter.com/1.1/favorites/list.json').done(function(data) {
        vm.favorites = data;
      }).fail(function(error) {
        // TODO: handle error
      });
    }
  }
</script>

<style scoped>
  .tweet-item {
    display: flex;
    flex-direction: row;

  }
  .tweet-item {
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
  }
  .tweet-body {
    width: 85%;
    padding-right: 5px;
    padding-left: 5px;
    border-right: 1px solid gray;
    display: flex;
    flex-direction: row;
  }
  .tweet-body img {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    height: 35px;
    width: 35px;
  }
  .book-button {
    width: 15%;
    color: #fd7f56;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
