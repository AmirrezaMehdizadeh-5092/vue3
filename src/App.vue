<template>
  <div id="app">
    <router-view></router-view>

  </div>
  
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>

* {
  direction: rtl;
  box-sizing: border-box;
  font-family: iran;
}

body {
  margin:0;
  padding: 0;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}
</style>
