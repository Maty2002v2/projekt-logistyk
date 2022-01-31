<template>
  <div class="flex-container">
    <div class="segmentBlock segmentInformation">
      <box-border title="wymiary kartonu">
        <label for="cartonWidth">Szerokość (cm) : </label>
        <input id="cartonWidth" type="number" v-model.number="width" />
        <br />
        <label for="cartonHeight">Wysokość (cm) :</label>
        <input id="cartonHeight" type="number" v-model.number="height" />
        <br />
        <label for="cartonDepth">Grubość (cm) : </label>
        <input id="cartonDepth" type="number" v-model.number="depth" />
        <br />
        <label for="cartonWeight">Waga (kg) : </label>
        <input id="cartonWeight" type="number" v-model.number="weight" />
      </box-border>
    </div>
    <div ref="segmentCarton3D" class="segmentBlock segment3D">
      <carton-3-d-component
        :width="width"
        :height="height"
        :depth="depth"
      ></carton-3-d-component>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BoxBorder from "../BoxBorder.vue";
import Carton3DComponent from "./Carton3DComponent.vue";

export default {
  name: "ViewCreatePallet",
  components: {
    Carton3DComponent,
    BoxBorder,
  },
  created() {
    this.setWidthCarton(1);
    this.setHeightCarton(1);
    this.setDepthCarton(1);
  },
  computed: {
    width: {
      get() {
        return this.$store.state.widthCarton;
      },
      set(value) {
        this.setWidthCarton(value);
      },
    },
    height: {
      get() {
        return this.$store.state.heightCarton;
      },
      set(value) {
        this.setHeightCarton(value);
      },
    },
    depth: {
      get() {
        return this.$store.state.depthCarton;
      },
      set(value) {
        this.setDepthCarton(value);
      },
    },
    weight: {
      get() {
        return this.$store.state.weightCarton;
      },
      set(value) {
        this.setWeightCarton(value);
      },
    },
  },
  methods: {
    ...mapMutations([
      "setWidthCarton",
      "setHeightCarton",
      "setDepthCarton",
      "setWeightCarton",
    ]),
  },
  watch: {
    //popatrzec na dyrektywy
    // width(newVal) {
    //   this.setWidthCarton(newVal);
    // },
    // height(newVal) {
    //   this.setHeightCarton(newVal);
    // },
    // depth(newVal) {
    //   this.setDepthCarton(newVal);
    // },
    // weight(newVal) {
    //   this.setWeightCarton(newVal);
    // },
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
