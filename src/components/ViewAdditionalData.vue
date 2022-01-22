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
        <label for="whetherToSetMaxHeight"
          >Chcesz podać maksymalną wysokość pjł ? (cm)</label
        >

        <br />

        <input
          type="checkbox"
          id="whetherToSetMaxHeight"
          v-model="whetherToSetMaxHeight"
        />
        <span v-if="whetherToSetMaxHeight"> Tak</span>
        <span v-else> Nie</span>

        <br />

        <input
          type="number"
          v-model.number="maxHeight"
          :disabled="!whetherToSetMaxHeight"
        />
      </div>

      <br />

      <div>
        <label for="whetherToSetMaxWeight"
          >Chcesz podać maksymalną wagę pjł ? (kg)</label
        >

        <br />

        <input
          type="checkbox"
          id="whetherToSetMaxWeight"
          v-model="whetherToSetMaxWeight"
        />
        <span v-if="whetherToSetMaxWeight"> Tak</span>
        <span v-else> Nie</span>

        <br />

        <input
          type="number"
          id="maxWeight"
          v-model.number="maxWeight"
          :disabled="!whetherToSetMaxWeight"
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
      whetherToSetMaxWeight: false,
      whetherToSetMaxHeight: false,
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
    maxWeight: {
      get() {
        return this.$store.state.maxWeight;
      },
      set(value) {
        this.setMaxWeight(value);
      },
    },
    maxHeight: {
      get() {
        return this.$store.state.maxHeight;
      },
      set(value) {
        this.setMaxHeight(value);
      },
    },
    semitrailerWidth: {
      get() {
        return this.$store.state.semitrailerWidth;
      },
      set(value) {
        console.log(typeof value, value);
        this.setSemitrailerWidth(value);
      },
    },
    semitrailerHeight: {
      get() {
        return this.$store.state.semitrailerHeight;
      },
      set(value) {
        console.log(typeof value, value);
        this.setSemitrailerHeight(value);
      },
    },
    semitrailerDepth: {
      get() {
        return this.$store.state.semitrailerDepth;
      },
      set(value) {
        console.log(typeof value, value);
        this.setSemitrailerDepth(value);
      },
    },
    semitrailerWeight: {
      get() {
        return this.$store.state.semitrailerWeight;
      },
      set(value) {
        console.log(typeof value, value);
        this.setSemitrailerWeight(value);
      },
    },
  },
  methods: {
    ...mapMutations([
      "setLevelY",
      "setMaxWeight",
      "setMaxHeight",
      "setSemitrailerWidth",
      "setSemitrailerHeight",
      "setSemitrailerDepth",
      "setSemitrailerWeight",
    ]),
  },
};
</script>
