<template>
  <div>
    <form>
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
    </form>
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
  },
  methods: {
    ...mapMutations(["setLevelY", "setMaxWeight", "setMaxHeight"]),
  },
};
</script>
