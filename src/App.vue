<template>
  <div id="app">
    <component :is="is"></component>
    <navigation-component
      class="navidation"
      @navigationEvent="navigationEvent"
    ></navigation-component>
  </div>
</template>

<script>
import ViewAdditionalData from "./components/ViewAdditionalData";
import ViewCreateCarton from "./components/carton/ViewCreateCarton";
import ViewCreatePallet from "./components/pallet/ViewCreatePallet";
import ViewResultsPallet from "./components/resultPallet/ViewResultsPallet.vue";
import ViewCreateSemitrailer from "./components/semitrailer/ViewCreateSemitrailer";
import NavigationComponent from "./components/NavigationComponent";

import "@/styles/globalStyles.css";

export default {
  name: "App",
  components: {
    ViewAdditionalData,
    ViewCreateCarton,
    ViewCreatePallet,
    ViewResultsPallet,
    ViewCreateSemitrailer,
    NavigationComponent,
  },
  data() {
    return {
      viewsList: [
        "ViewCreateCarton",
        "ViewCreatePallet",
        "ViewAdditionalData",
        "ViewResultsPallet",
        "ViewCreateSemitrailer",
      ],
      is: "ViewCreateCarton",
    };
  },
  methods: {
    navigationEvent(viewIdex) {
      this.is = this.viewsList[viewIdex];
    },
  },
};
</script>

<style>
body {
  margin: 0;
  background: white;
  /* overflow: hidden; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.navidation {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
