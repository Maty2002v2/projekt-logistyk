<template>
  <div class="navigation">
    <button @click="back()" class="navigationButton">🡸</button>
    <button @click="next()" class="navigationButton">🡺</button>
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
  background: #6e7491;
  border-radius: 50%;
}
.navigation {
  position: fixed;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.navigationButton {
  display: inline-block;
  border: none;
  padding: 4px 10px;
  margin: 0 3px;
  background: #57649c;
  color: #ffffff;
  cursor: pointer;
  transition: 0.1s all linear;
}
.navigationButton:active {
  transform: scale(0.8);
}
.dotts-wrapper {
  position: relative;
  margin-top: 10px;
}
.dott {
  transition: 0.1s all ease-in;
}
.active-dott {
  margin: 2px 5px;
  background: #495074;
  transform: scale(2);
}
</style>
