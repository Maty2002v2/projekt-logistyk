<template>
  <button @click="restoreData" class="buttonBgTransparent">
    Przywróć dane
  </button>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "RestoreButton",
  props: {
    oldWidth: Number,
    oldHeight: Number,
    oldDepth: Number,
    oldWeight: Number,
  },
  methods: {
    restoreData() {
      this.setWidthCarton(this.oldWidth);
      this.setHeightCarton(this.oldHeight);
      this.setDepthCarton(this.oldDepth);
      this.setWeightCarton(this.oldWeight);
    },

    ...mapMutations([
      "setWidthCarton",
      "setHeightCarton",
      "setDepthCarton",
      "setWeightCarton",
    ]),
  },
};
</script>
