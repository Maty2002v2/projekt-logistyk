<template>
  <div>
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
  background: green;
  width: 5px;
  height: 5px;
  margin: 2px;
  border-radius: 50%;
}
.dotts-wrapper {
  position: relative;
  margin-top: 10px;
}
.active-dott {
  transform: scale(2);
  margin: 2px 5px;
  background: chocolate;
}
</style>
