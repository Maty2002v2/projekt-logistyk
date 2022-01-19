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
  },
});

export default store;
