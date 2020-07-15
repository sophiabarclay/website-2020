<template>
  <div id="app">
    <nav-bar />
    <router-view class="router-view" />
    <img
      v-if="$route.path === '/about'"
      height="400px"
      src="@/assets/images/sophia.png"
      alt="Sophia Barclay"
      class="profile-image"
    />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "~@/styles/fonts.scss";
@import "~@/styles/main.scss";

#app {
  padding: 20px 30px 0 30px;
  font-family: "FuturaItalic";
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.profile-image {
  @media only screen and (max-width: 900px) {
    display: none;
  }
  position: sticky;
  bottom: 0;
  left: 55px;
}
</style>
