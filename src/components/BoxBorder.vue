<template>
  <div class="borderBox">
    <span>{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BoxBorder",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.borderBox {
  border-top-left-radius: 37px 140px;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;

  display: block;
  position: relative;
  top: 10%;
  border: solid 3px #6e7491;
  padding: 10px 0px;
  max-width: 90%;
  width: 70%;
  margin: 0 auto 0;
  font-size: 17px;
  line-height: 1.3em;
  transform: rotate(-1deg);
  box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  transform: translateY(4px) rotate(-5deg);
  transition: all 0.13s ease-in;
  box-sizing: border-box;

  background: rgba(0, 0, 0, 0.075);
}
.borderBox:hover {
  transform: translateY(4px) rotate(0deg);
}
span {
  position: absolute;
  top: -27px;
  left: 10%;
  display: block;
  text-align: left;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.685);
}

@media only screen and (max-width: 800px) {
  .segmentInformationBorder {
    top: 1%;
  }
  span {
    font-size: 15px;
  }
}

@media only screen and (max-height: 400px) {
  .segmentInformationBorder {
    max-height: 100%;
    overflow: scroll;
  }
}
</style>
