<template>
  <div class="tooltipContainer">
    <slot name="representingElement" v-if="hasSlotRepresentingElement"></slot>
    <span v-else class="basicElement">?</span>
    <div class="tooltip">
      <span class="text">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TooltipComponent",
  props: {
    message: String,
  },
  computed: {
    hasSlotRepresentingElement() {
      return !!this.$slots.representingElement;
    },
  },
};
</script>

<style scoped>
.tooltipContainer {
  position: absolute;
  cursor: help;
}

.tooltipContainer:hover .tooltip {
  opacity: 1;
}

.tooltip {
  position: absolute;
  top: 40px;
  left: 50%;

  width: 120px;
  padding: 5px 0;
  border: #57649c 1px solid;
  border-radius: 2px;

  color: #57649c;
  text-align: center;

  z-index: 1000;
  pointer-events: none;
  transform: translate(-50%, 0%);
  transition: opacity 1s ease;
  opacity: 0;
}

.text::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #57649c transparent;
}

.basicElement {
  display: inline-block;

  width: 20px;
  height: 20px;
  padding: 6px;
  border-radius: 50%;

  background: #57649c;

  color: #ffffff;
  font-weight: bold;
  text-align: center;

  opacity: 0.8;
}
</style>
