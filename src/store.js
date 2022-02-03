import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    typePallet: 1,
    widthCarton: 1,
    heightCarton: 1,
    depthCarton: 1, //20 60, 40 80
    weightCarton: 15,
    levelY: 7,
    maxHeightPallet: 160,
    maxWeightPallet: 730,
    weightOfWholePallet: 25,
    numberOfPackages: 0,
    numberOfPallets: 0,
    semitrailerWidth: 1350,
    semitrailerHeight: 225,
    semitrailerDepth: 275,
    semitrailerWeight: 500,
    oldValueWidth: null,
    oldValueHeight: null,
    oldValueDepth: null,
    oldValueWeight: null,
  },

  mutations: {
    setTypePallet(state, payload) {
      state.typePallet = payload;
    },
    setWidthCarton(state, payload) {
      state.widthCarton = payload;
    },
    setHeightCarton(state, payload) {
      state.heightCarton = payload;
    },
    setDepthCarton(state, payload) {
      state.depthCarton = payload;
    },
    setWeightCarton(state, payload) {
      state.weightCarton = payload;
    },
    setLevelY(state, payload) {
      state.levelY = payload;
    },
    setMaxWeightPallet(state, payload) {
      state.maxWeightPallet = payload;
    },
    setWeightOfWholePallet(state, payload) {
      state.weightOfWholePallet = payload;
    },
    setMaxHeightPallet(state, payload) {
      state.maxHeightPallet = payload;
    },
    setNumberOfPackages(state, payload) {
      state.numberOfPackages = payload;
    },
    setNumberOfPallets(state, payload) {
      state.numberOfPallets = payload;
    },
    setSemitrailerWidth(state, payload) {
      state.semitrailerWidth = payload;
    },
    setSemitrailerHeight(state, payload) {
      state.semitrailerHeight = payload;
    },
    setSemitrailerDepth(state, payload) {
      state.semitrailerDepth = payload;
    },
    setSemitrailerWeight(state, payload) {
      state.semitrailerWeight = payload;
    },
    setOldValueWidth(state, payload) {
      state.oldValueWidth = payload;
    },
    setOldValueHeight(state, payload) {
      state.oldValueHeight = payload;
    },
    setOldValueDepth(state, payload) {
      state.oldValueDepth = payload;
    },
    setOldValueWeight(state, payload) {
      state.oldValueWeight = payload;
    },
  },
});

export default store;
