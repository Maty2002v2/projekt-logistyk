<template>
  <div>
    <div>
      <select v-model.number="typePallet">
        <option value="1">Euro (1200x800x144)</option>
        <option value="2">Inna (1200x100x144)</option>
      </select>
    </div>
    <pallet-3-d-component :typePallet="typePallet"></pallet-3-d-component>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Pallet3DComponent from "./Pallet3DComponent.vue";

export default {
  components: { Pallet3DComponent },
  name: "CreatePalletViwe",
  data() {
    return {
      picked: false,
    };
  },
  computed: {
    typePallet: {
      get() {
        return this.$store.state.typePallet;
      },
      set(value) {
        this.setTypePallet(value);
      },
    },
  },
  methods: {
    ...mapMutations(["setTypePallet"]),
  },
  watch: {
    typePallet(newVal) {
      this.setTypePallet(newVal);
    },
  },
};
</script>
