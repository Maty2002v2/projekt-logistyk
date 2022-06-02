<template>
  <div class="flex-container">
    <div class="segmentBlock segmentInformation">
      <box-border title="wymiary kartonu">
        <range-input-component
          labelText="Szerokość (cm) :"
          v-model.number="width"
        ></range-input-component>
        <br />
        <range-input-component
          labelText="Wysokość (cm) : "
          v-model.number="height"
        ></range-input-component>
        <br />
        <range-input-component
          labelText="Grubość (cm) : "
          v-model.number="depth"
        ></range-input-component>
        <br />
        <range-input-component
          labelText="Waga (kg) : "
          v-model.number="weight"
        ></range-input-component>
      </box-border>
      <box-border v-if="Boolean(oldValueWidth)" title="Poprzednie dane">
        <p>Szerokość: {{ oldValueWidth }}</p>
        <p>Wysokość: {{ oldValueHeight }}</p>
        <p>Grubość: {{ oldValueDepth }}</p>
        <p>Waga: {{ oldValueWeight }}</p>
        <restore-button
          :oldWidth="oldValueWidth"
          :oldHeight="oldValueHeight"
          :oldDepth="oldValueDepth"
          :oldWeight="oldValueWeight"
        ></restore-button>
      </box-border>
    </div>
    <div
      ref="segmentCarton3D"
      style="position: relative"
      class="segmentBlock segment3D"
    >
      <tooltip-component
        message="Scrollem można oddalić lub przybliżyć podgląd"
        style="position: absolute; top: 30px; right: 60px"
      ></tooltip-component>
      <carton-3-d-component
        :width="width"
        :height="height"
        :depth="depth"
      ></carton-3-d-component>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BoxBorder from "../BoxBorder.vue";
import RangeInputComponent from "../RangeInputComponent.vue";
import RestoreButton from "../RestoreButton.vue";
import TooltipComponent from "../TooltipComponent.vue";
import Carton3DComponent from "./Carton3DComponent.vue";

export default {
  name: "ViewCreatePallet",
  components: {
    Carton3DComponent,
    BoxBorder,
    RestoreButton,
    TooltipComponent,
    RangeInputComponent,
  },
  created() {
    this.setWidthCarton(1);
    this.setHeightCarton(1);
    this.setDepthCarton(1);
  },
  destroyed() {
    this.setOldValueWidth(this.width);
    this.setOldValueHeight(this.height);
    this.setOldValueDepth(this.depth);
    this.setOldValueWeight(this.weight);
  },
  data() {
    return {
      x: 3,
    };
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

    ...mapState({
      oldValueWidth: (state) => state.oldValueWidth,
      oldValueHeight: (state) => state.oldValueHeight,
      oldValueDepth: (state) => state.oldValueDepth,
      oldValueWeight: (state) => state.oldValueWeight,
    }),
  },
  methods: {
    ...mapMutations([
      "setWidthCarton",
      "setHeightCarton",
      "setDepthCarton",
      "setWeightCarton",
      "setOldValueWidth",
      "setOldValueHeight",
      "setOldValueDepth",
      "setOldValueWeight",
    ]),
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
}
</style>
