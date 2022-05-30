<template>
  <div class="flex-container">
    <div class="segmentBlock segmentInformation">
      <box-border>
        <p>Liczba warstw: {{ howManyFloors() }}</p>
        <p>Liczba kartonów: {{ calculateNumberCartons }}</p>
        <p>Wysokość: {{ calculateHeightWithoutPallet }} cm (bez palety)</p>
        <p>Waga: {{ calculateWeightWithoutPallet }} kg (bez palety)</p>
        <p>Wysokość: {{ calculateHeight }} cm (z paletą)</p>
        <p>Waga: {{ calculateWeight }} kg (z paletą)</p>
        <span v-if="calculateNumberCartons">
          <p>
            Objętość jednego kartonu:
            {{ calculateVolumeOfCarton }} cm<sup>3</sup>
          </p>
          <p>
            Objętość jednej palety: {{ calculateVolumeOfPallet }} cm<sup>3</sup>
            (wymiary palety razy wyśokość)
          </p>
        </span>
      </box-border>
    </div>
    <div ref="segmentResultsPallet3D" class="segmentBlock segment3D">
      <result-3-d-component
        :typePallet="typePallet"
        :widthCarton="carton.width"
        :heightCarton="carton.height"
        :depthCarton="carton.depth"
        :levelX="levels.x"
        :levelY="levels.y"
        :levelZ="levels.z"
        :loadTexture="loadTexture"
      ></result-3-d-component>
    </div>
  </div>
</template>

<script>
//TODO: Ogarnąć by dla dotatkowych danych o różnyc danych wszystko dobrze liczyło
import { mapState, mapMutations } from "vuex";
import BoxBorder from "../BoxBorder.vue";
import Result3DComponent from "./Result3DComponent.vue";

export default {
  name: "ViewResultsPallet",
  components: {
    Result3DComponent,
    BoxBorder,
  },
  data() {
    return {
      carton: {
        width: null,
        height: null,
        depth: null,
      },
      levels: {
        x: null,
        y: null, //zmienilem z 3 2022
        z: null,
      },
      pallet: {
        width: null,
        height: null,
        depth: null,
      },
    };
  },
  created() {
    this.recognizePalette();

    let firstPossibility =
      Math.floor(this.pallet.width / this.depthCarton) *
      Math.floor(this.pallet.depth / this.widthCarton);
    let secoundPossibility =
      Math.floor(this.pallet.width / this.widthCarton) *
      Math.floor(this.pallet.depth / this.depthCarton);

    // console.log(
    //   firstPossibility,
    //   secoundPossibility,
    //   firstPossibility > secoundPossibility
    // );

    if (firstPossibility < secoundPossibility) {
      this.carton.width = this.widthCarton;
      this.carton.depth = this.depthCarton;

      this.levels.x = Math.floor(this.pallet.width / this.widthCarton);
      this.levels.z = Math.floor(this.pallet.depth / this.depthCarton);

      //   this.levels.x = Math.floor(this.pallet.width / this.depthCarton);
      //   this.levels.z = Math.floor(this.pallet.depth / this.widthCarton);

      // console.log(
      //   this.carton.width,
      //   this.carton.height,
      //   this.carton.depth,
      //   this.levels.x,
      //   this.levels.y,
      //   this.levels.z
      // );
    } else {
      this.carton.width = this.depthCarton;
      this.carton.depth = this.widthCarton;

      this.levels.x = Math.floor(this.pallet.width / this.depthCarton);
      this.levels.z = Math.floor(this.pallet.depth / this.widthCarton);

      //   this.levels.x = Math.floor(this.pallet.width / this.widthCarton);
      //   this.levels.z = Math.floor(this.pallet.depth / this.depthCarton);
    }

    this.carton.height = this.heightCarton;
    this.levels.y = this.howManyFloors();

    this.setLevelX(this.levels.x);
    this.setLevelY(this.levels.y);
    this.setLevelZ(this.levels.z);

    // console.log(
    //   this.carton.width,
    //   this.carton.height,
    //   this.carton.depth,
    //   this.levels.x,
    //   this.levels.y,
    //   this.levels.z
    // );

    this.setNumberOfPackages(this.calculateNumberCartons);
    this.setWeightOfWholePallet(
      this.calculateNumberCartons * this.weightCarton + 25
    );
  },
  computed: {
    calculateHeight() {
      return (
        Math.ceil(
          (this.pallet.height + this.howManyFloors() * this.carton.height) * 100
        ) / 100
      );
    },

    calculateHeightWithoutPallet() {
      return Math.ceil((this.calculateHeight - this.pallet.height) * 100) / 100;
    },

    calculateNumberCartons() {
      return this.levels.x * this.levels.z * this.levels.y;
    },

    calculateWeight() {
      return this.calculateNumberCartons * this.weightCarton + 25;
    },

    calculateWeightWithoutPallet() {
      return this.calculateWeight - 25;
    },

    calculateWeightOfFloor() {
      return this.levels.x * this.levels.z * this.weightCarton;
    },

    calculateVolumeOfCarton() {
      return this.carton.width * this.carton.depth * this.carton.height;
    },

    calculateVolumeOfPallet() {
      return (
        this.pallet.width *
        this.pallet.depth *
        (this.maxHeightPallet > 0
          ? this.maxHeightPallet - this.pallet.height
          : this.pallet.height)
      );
    },

    ...mapState({
      typePallet: (state) => state.typePallet,
      widthCarton: (state) => state.widthCarton,
      heightCarton: (state) => state.heightCarton,
      depthCarton: (state) => state.depthCarton,
      weightCarton: (state) => state.weightCarton,
      maxNumberFloors: (state) => state.maxNumberFloors,
      maxWeightPallet: (state) => state.maxWeightPallet,
      maxHeightPallet: (state) => state.maxHeightPallet,
      semitrailerHeight: (state) => state.semitrailerHeight,
      semitrailerWeight: (state) => state.semitrailerWeight,
      loadTexture: (state) => state.loadTexture,
    }),
  },
  methods: {
    howManyFloors() {
      let i = 0;
      let flag = true;

      while (flag) {
        if (this.maxHeightPallet > 0) {
          if (this.heightCarton * (i + 1) + 14.4 >= this.maxHeightPallet) {
            flag = false;
            break;
          }
        }

        if (this.maxWeightPallet > 0) {
          if (
            this.calculateWeightOfFloor * (i + 1) + 25 >=
            this.maxWeightPallet
          ) {
            flag = false;
            break;
          }
        }

        if (this.maxNumberFloors > 0) {
          if (i >= this.maxNumberFloors) {
            flag = false;
            break;
          }
        }

        if (this.heightCarton * (i + 1) + 14.4 >= this.semitrailerHeight) {
          flag = false;
          break;
        }

        if (
          this.calculateWeightOfFloor * (i + 1) + 25 >=
          this.semitrailerWeight
        ) {
          flag = false;
          break;
        }

        i++;
      }

      return i;
    },
    recognizePalette() {
      if (this.typePallet === 1) {
        this.pallet.width = 120;
        this.pallet.height = 14.4;
        this.pallet.depth = 80;
      } else {
        this.pallet.width = 120;
        this.pallet.height = 14.4;
        this.pallet.depth = 100;
      }
    },

    ...mapMutations([
      "setNumberOfPackages",
      "setWeightOfWholePallet",
      "setLevelX",
      "setLevelY",
      "setLevelZ",
    ]),
  },
};
</script>
