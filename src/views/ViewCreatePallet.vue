<template>
  <div class="flex-container">
    <div class="segmentBlock segmentInformation">
      <box-border title="wybór palety">
        <select v-model.number="typePallet">
          <option value="1">Euro (1200x800x144)</option>
          <option value="2">Inna (1200x1000x144)</option>
        </select>
      </box-border>
    </div>
    <div ref="segmentPallet3D" class="segmentBlock segment3D">
      <pallet-3-d-component :typePallet="typePallet"></pallet-3-d-component>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BoxBorder from "../components/BoxBorder.vue";
import Pallet3DComponent from "../components/pallet/Pallet3DComponent.vue";

export default {
  name: "CreatePalletViwe",
  components: {
    Pallet3DComponent,
    BoxBorder,
  },
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
