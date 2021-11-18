<template>
  <div id="app" class="font-roboto">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  width: 100vw;
  height: 100vh;
}

.font-impact {
  font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal,
    Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif;
}


</style>
