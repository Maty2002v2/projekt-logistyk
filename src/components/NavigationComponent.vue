<template>
  <div class="navigation">
    <router-link
      :to="listPath[step > 0 ? step - 1 : 0]"
      class="button links"
      @click.native="back()"
      >🡸</router-link
    >
    <router-link
      :to="listPath[step < listPath.length - 1 ? step + 1 : step]"
      class="button links"
      @click.native="next()"
      >🡺</router-link
    >
    <br />
    <div class="dotts-wrapper">
      <span class="dott active-dott"></span>
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
      listPath: [
        "/",
        "/pallet",
        "/additional-data",
        "/results-pallet",
        "/semitrailer",
      ],
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
