<template>
  <div class="navigation">
    <button @click="back()">(--</button>
    <button @click="next()">--)</button>
    <br />
    <div class="dotts-wrapper">
      <span class="dott"></span>
      <span class="dott"></span>
      <span class="dott"></span>
      <span class="dott"></span>
      <span class="dott"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    next() {
      if (this.step + 1 < 5) {
        //?
        this.step++;
      }
    },
    back() {
      if (this.step > 0) {
        this.step--;
      }
    },
  },
  watch: {
    step(newVaue) {
      let spans = document.querySelectorAll("span.dott");

      spans.forEach((el) => el.classList.remove("active-dott"));
      spans[newVaue].classList.add("active-dott");

      this.$emit("navigationEvent", newVaue);
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
span {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 2px;
  background: green;
  border-radius: 50%;
}
.navigation {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dotts-wrapper {
  position: relative;
  margin-top: 10px;
}
.active-dott {
  margin: 2px 5px;
  background: chocolate;
  transform: scale(2);
}
</style>
