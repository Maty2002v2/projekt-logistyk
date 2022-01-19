<template>
  <div>
    <!-- <p>Wielkośc paczki:</p>

    <label for="cartonWidth">Szerokość (cm) : </label>
    <input id="cartonWidth" type="number" v-model.number="widthCarton" />
    <br />
    <label for="cartonHeight">Wysokość (cm) :</label>
    <input id="cartonHeight" type="number" v-model.number="heightCarton" />
    <br />
    <label for="cartonDepth">Grubość (cm) : </label>
    <input id="cartonDepth" type="number" v-model.number="depthCarton" />
    <br />
    <label for="cartonWeight">Waga (kg) : </label>
    <input id="cartonWeight" type="number" v-model.number="weightCarton" />

    <br />
    <br />
    <p>Paleta:</p>

    <label for="cartonWeight">Ilość paczek: </label>
    <input id="cartonWeight" type="number" v-model.number="numberOfPackages" />

    <br />
    <br /> -->
    <p>Dane miejsca na ładunek:</p>

    <label for="semitrailerDepth">Długość (cm) : </label>
    <input
      id="semitrailerDepth"
      type="number"
      value="225"
      ref="semitrailerDepth"
    />
    <br />
    <label for="semitrailerWidth">Szerokość (cm) : </label>
    <input
      id="semitrailerWidth"
      type="number"
      value="1350"
      ref="semitrailerWidth"
    />
    <br />
    <label for="semitrailerHeight">Wysokość (cm) : </label>
    <input
      id="semitrailerHeight"
      type="number"
      value="275"
      ref="semitrailerHeight"
    />
    <br />

    <button>Przelicz</button>

    <semitrailer-3-d-component
      :widthSemitrailer="widthSemitrailer"
      :depthSemitrailer="depthSemitrailer"
      :heightSemitrailer="heightSemitrailer"
    ></semitrailer-3-d-component>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Semitrailer3DComponent from "./Semitrailer3DComponent.vue";

export default {
  components: { Semitrailer3DComponent },
  name: "ViewCreateSemitrailer",
  data() {
    return {
      // widthCarton: 0,
      // heightCarton: 0,
      // depthCarton: 0,
      // weightCarton: 0,
      // numberOfPackages: 0,
      widthSemitrailer: 1350,
      heightSemitrailer: 275,
      depthSemitrailer: 225,
    };
  },
  created() {
    // this.widthCarton = this.widthCartonFromStore;
    // this.heightCarton = this.heightCartonFromStore;
    // this.depthCarton = this.depthCartonFromStore;
    // this.weightCarton = this.weightCartonFromStore;
    // this.numberOfPackages = this.numberOfPackagesFromStore;
  },
  computed: {
    ...mapState({
      // widthCartonFromStore: (state) => state.widthCarton,
      // heightCartonFromStore: (state) => state.heightCarton,
      // depthCartonFromStore: (state) => state.depthCarton,
      // weightCartonFromStore: (state) => state.weightCarton,
      // numberOfPackagesFromStore: (state) => state.numberOfPackages,
    }),
  },
  methods: {
    convert() {
      this.widthSemitrailer = parseInt(this.$refs.semitrailerWidth.value);
      this.depthSemitrailer = parseInt(this.$refs.semitrailerDepth.value);
      this.heightSemitrailer = parseInt(this.$refs.semitrailerHeight.value);
    },
  },
};
</script>
