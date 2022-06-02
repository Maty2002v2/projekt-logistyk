<template>
  <div>
    <label :for="id">{{ labelText }}</label>
    <div class="container">
      <input
        type="range"
        :id="id"
        class="inputRange"
        :value="value"
        :min="min"
        :max="max"
        @input="handleInput($event.target.value)"
      />
      <div class="selector" ref="selector">
        <div class="selectValue"></div>
        <div class="selectBtn">
          <span>{{ value }}</span>
        </div>
      </div>
      <div class="progressBar" ref="progressBar"></div>
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
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = this._uid;

    this.$refs.selector.style.left =
      Math.round((this.value / this.max) * 100) + "%";
    this.$refs.progressBar.style.width =
      Math.round((this.value / this.max) * 100) + "%";
  },
  methods: {
    handleInput(e) {
      this.$refs.selector.style.left = Math.round((e / this.max) * 100) + "%";
      this.$refs.progressBar.style.width =
        Math.round((e / this.max) * 100) + "%";

      this.$emit("change", e);
    },
  },
  watch: {
    value() {
      this.$refs.selector.style.left =
        Math.round((this.value / this.max) * 100) + "%";
      this.$refs.progressBar.style.width =
        Math.round((this.value / this.max) * 100) + "%";
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
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  outline: none;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
}

.inputRange::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  z-index: 30;
  position: relative;
}

.selector {
  height: 25px;
  width: 48px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  /* transform: translateX(-50%); */
  z-index: 2;
}

.selectBtn {
  height: 10px;
  width: 10px;
  background: #57649c;
  color: #57649c;
  position: absolute;
  border-radius: 50%;
  transform: translateX(-50%);
  bottom: -9px;
  transition: 0.15s all ease-in;
  box-sizing: border-box;
}

.inputRange:hover ~ .selector .selectBtn {
  border-bottom-right-radius: 0;
  transform: rotate(45deg) scale(3.2);
  color: #ffffff;
}

.inputRange:active ~ .selector .selectBtn {
  border: 1px solid white;
}

span {
  display: inline-block;
  font-size: 5px;
  width: 100%;
  height: 100%;
  position: relative;
  top: -9px;
  left: -4px;
  transform: rotate(315deg);
}

/* .selectValue {
  width: 20px;
  height: 12px;
  position: absolute;
  top: 0;
  background: #ffd200;
  border-radius: 4px;
  text-align: center;
  line-height: 45px;
  font-size: 20px;
  font-weight: bold;
  transform: translateX(-50%);
}

.selectValue::after {
  content: "";
  border-top: 8px solid #ffd200;
  border-left: 10px solid #000;
  border-right: 10px solid #000;
  position: absolute;
  bottom: -14px;
  left: 0;
} */

.progressBar {
  height: 7px;
  background: #9aa5d4;
  border-radius: 3px;
  position: absolute;
  /* transform: translateY(-50%); */
  top: 0;
  left: 0;
}
</style>
