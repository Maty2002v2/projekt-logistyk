<template>
  <div>
    <div>
      <h2>Dane do pił:</h2>
      <div>
        <label for="levelY">Chcesz podać konkretną liczbę pięter ? </label>

        <br />

        <input type="checkbox" id="levelY" v-model="whetherToSetHeight" />
        <span v-if="whetherToSetHeight"> Tak</span>
        <span v-else> Nie</span>

        <br />

        <input
          type="number"
          id="levelY"
          v-model.number="levelY"
          :disabled="!whetherToSetHeight"
        />
      </div>

      <br />

      <div>
        <label for="whetherToSetMaxHeightPallet"
          >Chcesz podać maksymalną wysokość pjł ? (cm)</label
        >

        <br />

        <input
          type="checkbox"
          id="whetherToSetMaxHeightPallet"
          v-model="whetherToSetMaxHeightPallet"
        />
        <span v-if="whetherToSetMaxHeightPallet"> Tak</span>
        <span v-else> Nie</span>

        <br />

        <input
          type="number"
          v-model.number="maxHeightPallet"
          :disabled="!whetherToSetMaxHeightPallet"
        />
      </div>

      <br />

      <div>
        <label for="whetherToSetMaxWeightPallet"
          >Chcesz podać maksymalną wagę pjł ? (kg)</label
        >

        <br />

        <input
          type="checkbox"
          id="whetherToSetMaxWeightPallet"
          v-model="whetherToSetMaxWeightPallet"
        />
        <span v-if="whetherToSetMaxWeightPallet"> Tak</span>
        <span v-else> Nie</span>

        <br />

        <input
          type="number"
          id="maxWeightPallet"
          v-model.number="maxWeightPallet"
          :disabled="!whetherToSetMaxWeightPallet"
        />
      </div>
    </div>

    <div>
      <h2>Dane naczepy:</h2>

      <label for="semitrailerDepth">Długość (cm) : </label>
      <input
        id="semitrailerDepth"
        type="number"
        value="225"
        v-model.number="semitrailerDepth"
      />
      <br />
      <label for="semitrailerWidth">Szerokość (cm) : </label>
      <input
        id="semitrailerWidth"
        type="number"
        value="1350"
        v-model.number="semitrailerWidth"
      />
      <br />
      <label for="semitrailerHeight">Wysokość (cm) : </label>
      <input
        id="semitrailerHeight"
        type="number"
        value="275"
        v-model.number="semitrailerHeight"
      />
      <br />
      <label for="semitrailerWeight">Waga (kg) : </label>
      <input
        id="semitrailerWeight"
        type="number"
        value="275"
        v-model.number="semitrailerWeight"
      />
      <br />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ViewAdditionalData",
  data() {
    return {
      whetherToSetHeight: false,
      whetherToSetMaxWeightPallet: false,
      whetherToSetMaxHeightPallet: false,
    };
  },
  computed: {
    levelY: {
      get() {
        return this.$store.state.levelY;
      },
      set(value) {
        this.setLevelY(value);
      },
    },
    maxWeightPallet: {
      get() {
        return this.$store.state.maxWeightPallet;
      },
      set(value) {
        this.setMaxWeightPallet(value);
      },
    },
    maxHeightPallet: {
      get() {
        return this.$store.state.maxHeightPallet;
      },
      set(value) {
        this.setMaxHeightPallet(value);
      },
    },
    semitrailerWidth: {
      get() {
        return this.$store.state.semitrailerWidth;
      },
      set(value) {
        this.setSemitrailerWidth(value);
      },
    },
    semitrailerHeight: {
      get() {
        return this.$store.state.semitrailerHeight;
      },
      set(value) {
        this.setSemitrailerHeight(value);
      },
    },
    semitrailerDepth: {
      get() {
        return this.$store.state.semitrailerDepth;
      },
      set(value) {
        this.setSemitrailerDepth(value);
      },
    },
    semitrailerWeight: {
      get() {
        return this.$store.state.semitrailerWeight;
      },
      set(value) {
        this.setSemitrailerWeight(value);
      },
    },
  },
  methods: {
    ...mapMutations([
      "setLevelY",
      "setMaxWeightPallet",
      "setMaxHeightPallet",
      "setSemitrailerWidth",
      "setSemitrailerHeight",
      "setSemitrailerDepth",
      "setSemitrailerWeight",
    ]),
  },
};
</script>
