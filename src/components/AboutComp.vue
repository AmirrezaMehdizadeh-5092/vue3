<template>
  <v-container id="a" fluid="true">
    <v-container id="b"></v-container>
    <v-container id="b"></v-container>
    <v-container id="b"></v-container>
    <v-container id="b"></v-container>
  </v-container>
  <button @click="aa()">df</button>
</template>

<script>
export default {
  name: "AboutComp",
  methods: {
    aa() {
      this.$store.state.count = 10
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style>
#a {
  height: 500px;
  background-color: red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#b {
  height: 500px;
  background-color: rgb(4, 133, 188);
  width: 25%;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
