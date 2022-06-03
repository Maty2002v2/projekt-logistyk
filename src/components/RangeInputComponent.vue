<template>
  <div>
    <label :for="id">{{ labelText }}</label>
    <div class="container">
      <input
        :id="id"
        :value="value"
        type="range"
        :min="min"
        :max="max"
        class="inputRange"
        @input="handleInput($event.target.value)"
      />
      <div
        class="selector"
        :style="{ left: Math.round((this.value / this.max) * 100) + '%' }"
      >
        <div class="selectorBtn">
          <span class="selectorBtnValue">{{ value }}</span>
        </div>
      </div>
      <div
        class="progressBar"
        :style="{ width: Math.round((this.value / this.max) * 100) + '%' }"
      ></div>
      <span style="display: block; height: 1px"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeInputComponent",
  props: {
    labelText: String,
    value: Number,
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 120,
    },
  },
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e);
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 80%;
  margin: 20px auto;
}

.inputRange {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 7px;
  border-radius: 3px;
  margin: 0;

  -webkit-appearance: none; /* WebKit */
  -moz-appearance: none; /* Mozilla */
  -o-appearance: none; /* Opera */
  -ms-appearance: none; /* Internet Explorer */
  appearance: none; /* CSS3 */
  outline: none;
}

.inputRange::-webkit-slider-thumb {
  position: relative;
  width: 48px;
  height: 48px;
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 30;
}

.selector {
  position: absolute;
  bottom: 0px;
  left: 50%;
  height: 25px;
  width: 48px;
  z-index: 2;
}

.selectorBtn {
  position: absolute;
  bottom: -8px;

  height: 10px;
  width: 10px;
  border-radius: 50%;
  box-sizing: border-box;

  background: #57649c;

  color: #57649c;

  transform: translateX(-50%);
  transition: 0.15s all ease-in;
}

.inputRange:hover ~ .selector .selectorBtn {
  border-bottom-right-radius: 0;
  color: #ffffff;
  transform: rotate(45deg) scale(3.2);
}

.inputRange:active ~ .selector .selectorBtn,
.inputRange:active ~ .progressBar {
  border: 1px solid white;
}

.selectorBtnValue {
  position: relative;
  top: -8px;
  left: -4px;

  display: inline-block;
  width: 100%;
  height: 100%;

  font-size: 5px;

  transform: rotate(315deg);
}

.progressBar {
  position: absolute;
  top: 0;
  left: 0;

  height: 7px;
  border-radius: 3px;
  box-sizing: border-box;

  background: rgb(161, 168, 201);
  background: linear-gradient(
    90deg,
    rgba(161, 168, 201, 1) 0%,
    rgba(87, 100, 156, 1) 100%
  );
}
</style>
