<template>
  <div class="segmentInformation">
    <div style="max-width: 800px; margin: auto">
      <div>
        <h2>Dane do pjł:</h2>

        <div>
          <span class="label-group">
            <label for="maxNumberFloors">Chcesz zmienić liczbę pięter ? </label>

            <span>
              <input
                type="checkbox"
                id="maxNumberFloors"
                v-model="whetherToSetHeight"
              />
              <span v-if="whetherToSetHeight"> Tak</span>
              <span v-else> Nie</span>
            </span>
          </span>

          <br />

          <input
            type="number"
            id="maxNumberFloors"
            v-model.number="maxNumberFloors"
            :disabled="!whetherToSetHeight"
          />
        </div>
        <br />

        <div>
          <span class="label-group">
            <label for="whetherToSetMaxHeightPallet"
              >Chcesz zmienić maksymalną wysokość pjł ? (cm)</label
            >

            <span>
              <input
                type="checkbox"
                id="whetherToSetMaxHeightPallet"
                v-model="whetherToSetMaxHeightPallet"
              />
              <span v-if="whetherToSetMaxHeightPallet"> Tak</span>
              <span v-else> Nie</span>
            </span>
          </span>

          <br />

          <input
            type="number"
            v-model.number="maxHeightPallet"
            :disabled="!whetherToSetMaxHeightPallet"
          />
        </div>
        <br />

        <div>
          <span class="label-group">
            <label for="whetherToSetMaxWeightPallet"
              >Chcesz zmienić maksymalną wagę pjł ? (kg)</label
            >

            <span>
              <input
                type="checkbox"
                id="whetherToSetMaxWeightPallet"
                v-model="whetherToSetMaxWeightPallet"
              />
              <span v-if="whetherToSetMaxWeightPallet"> Tak</span>
              <span v-else> Nie</span>
            </span>
          </span>
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
        <label for="semitrailerWeight">Maksymalna waga (kg) : </label>
        <input
          id="semitrailerWeight"
          type="number"
          value="275"
          v-model.number="semitrailerWeight"
        />
        <br />
      </div>

      <div>
        <h2>Dodatkowe opcje:</h2>

        <div>
          <h3>Włączyć textury:</h3>
          <label class="switch">
            <input type="checkbox" v-model="loadTexture" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
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
    maxNumberFloors: {
      get() {
        return this.$store.state.maxNumberFloors;
      },
      set(value) {
        this.setMaxNumberFloors(value);
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
    loadTexture: {
      get() {
        return this.$store.state.loadTexture;
      },
      set(value) {
        this.setLoadTexture(value);
      },
    },
  },
  methods: {
    ...mapMutations([
      "setMaxNumberFloors",
      "setMaxWeightPallet",
      "setMaxHeightPallet",
      "setSemitrailerWidth",
      "setSemitrailerHeight",
      "setSemitrailerDepth",
      "setSemitrailerWeight",
      "setLoadTexture",
    ]),
  },
};
</script>
