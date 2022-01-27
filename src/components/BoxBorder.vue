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
  position: relative;
  top: 10%;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  width: 70%;
  max-width: 90%;
  padding: 10px 0px;
  border: solid 3px #6e7491;
  border-top-left-radius: 37px 140px;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
  margin: 0 auto 50px;
  background: rgba(0, 0, 0, 0.075);
  font-size: 17px;
  line-height: 1.3em;
  box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  transform: rotate(-1deg);
  transform: translateY(4px) rotate(-5deg);
  transition: all 0.13s ease-in;
}
.borderBox:hover {
  transform: translateY(4px) rotate(0deg);
}
span {
  position: absolute;
  top: -27px;
  left: 10%;
  display: block;
  color: rgba(0, 0, 0, 0.685);
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
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
  .borderBox {
    overflow-y: scroll;
    max-height: 100%;
  }
}
</style>
