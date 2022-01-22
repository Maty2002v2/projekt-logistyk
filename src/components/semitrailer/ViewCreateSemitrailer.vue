<template>
  <semitrailer-3-d-component
    :widthSemitrailer="widthSemitrailerFromStore"
    :heightSemitrailer="heightSemitrailerFromStore"
    :depthSemitrailer="depthSemitrailerFromStore"
    :weightSemitrailer="weightSemitrailerFromStore"
  ></semitrailer-3-d-component>
</template>

<script>
import { mapState } from "vuex";
import Semitrailer3DComponent from "./Semitrailer3DComponent.vue";

export default {
  components: { Semitrailer3DComponent },
  name: "ViewCreateSemitrailer",
  mounted() {
    console.log(
      this.widthSemitrailerFromStore,
      this.heightSemitrailerFromStore,
      this.depthSemitrailerFromStore,
      this.weightSemitrailerFromStore
    );
  },
  computed: {
    ...mapState({
      widthSemitrailerFromStore: (state) => state.semitrailerWidth,
      heightSemitrailerFromStore: (state) => state.semitrailerHeight,
      depthSemitrailerFromStore: (state) => state.semitrailerDepth,
      weightSemitrailerFromStore: (state) => state.semitrailerWeight,
    }),
  },
};
</script>
