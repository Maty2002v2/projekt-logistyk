import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    typePallet: 1,
    widthCarton: 40,
    heightCarton: 30,
    depthCarton: 20, //20 60, 40 80
    weightCarton: 15,
    levelY: 7,
    maxHeight: 160,
    maxWeight: 730,
    numberOfPackages: 0,
    semitrailerWidth: 1350,
    semitrailerHeight: 225,
    semitrailerDepth: 275,
    semitrailerWeight: 500,
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
    setMaxWeight(state, payload) {
      state.maxWeight = payload;
    },
    setMaxHeight(state, payload) {
      state.maxHeight = payload;
    },
    setNumberOfPackages(state, payload) {
      state.numberOfPackages = payload;
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
  },
});

export default store;
