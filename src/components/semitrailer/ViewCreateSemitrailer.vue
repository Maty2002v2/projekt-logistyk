<template>
  <div class="flex-container">
    <div class="segmentBlock segmentInformation">
      <box-border>
        <p>Ilość palet: {{ numberOfPallets }}</p>
        <p>Ilość kartonów: {{ numberOfPallets * numberOfPackages }}</p>
        <p>Waga palety: {{ weightOfWholePallet }} kg</p>
        <p>Waga ładunku: {{ numberOfPallets * weightOfWholePallet }} kg</p>
        <p>Maksymalna waga ładunku: {{ maxWeightSemitrailerFromStore }} kg</p>
        <p>
          Maksymalna wysokość ładunku: {{ maxHeightSemitrailerFromStore }} cm
        </p>
      </box-border>
    </div>
    <div ref="segmentSemitrailer3D" class="segmentBlock segment3D">
      <semitrailer-3-d-component
        :widthSemitrailer="widthSemitrailerFromStore"
        :heightSemitrailer="heightSemitrailerFromStore"
        :depthSemitrailer="depthSemitrailerFromStore"
        :maxWeightSemitrailer="maxWeightSemitrailerFromStore"
        :typePallet="typePallet"
        :weightOfWholePallet="weightOfWholePallet"
        :levelY="levelY"
        :levelX="levelX"
        :levelZ="levelZ"
        :widthCarton="widthCarton"
        :heightCarton="heightCarton"
        :depthCarton="depthCarton"
        :loadTexture="loadTexture"
      ></semitrailer-3-d-component>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BoxBorder from "../BoxBorder.vue";
import Semitrailer3DComponent from "./Semitrailer3DComponent.vue";

export default {
  name: "ViewCreateSemitrailer",
  components: { Semitrailer3DComponent, BoxBorder },
  computed: {
    ...mapState({
      widthSemitrailerFromStore: (state) => state.semitrailerWidth,
      heightSemitrailerFromStore: (state) => state.semitrailerHeight,
      depthSemitrailerFromStore: (state) => state.semitrailerDepth,
      maxHeightSemitrailerFromStore: (state) => state.semitrailerHeight,
      maxWeightSemitrailerFromStore: (state) => state.semitrailerWeight,
      numberOfPackages: (state) => state.numberOfPackages,
      numberOfPallets: (state) => state.numberOfPallets,
      weightOfWholePallet: (state) => state.weightOfWholePallet,
      typePallet: (state) => state.typePallet,
      levelY: (state) => state.levelY,
      levelX: (state) => state.levelX,
      levelZ: (state) => state.levelZ,
      widthCarton: (state) => state.widthCarton,
      heightCarton: (state) => state.heightCarton,
      depthCarton: (state) => state.depthCarton,
      loadTexture: (state) => state.loadTexture,
    }),
  },
};
</script>
