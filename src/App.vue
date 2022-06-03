<template>
  <div id="app">
    <router-view></router-view>
    <navigation-component></navigation-component>
  </div>
</template>

<script>
import "@/styles/globalStyles.css";
import "@/styles/switchButton.css";
import NavigationComponent from "./components/NavigationComponent.vue";

export default {
  components: { NavigationComponent },
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  background: white;
}
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
