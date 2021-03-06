<template>
  <div ref="canvas"></div>
</template>

<script>
import * as THREE from "three";
import LargePallet from "../../classes/LargePallet"; //1200x800x144 25
import SmallerPallet from "../../classes/SmallerPallet"; //1200x1000x144 25

export default {
  name: "Pallet3DComponent",
  props: {
    typePallet: Number,
  },
  data() {
    const SCENE = new THREE.Scene();
    const CAMERA = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 2 / window.innerHeight,
      0.1,
      1000
    );
    const RENDERER = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const LIGHT1 = new THREE.PointLight(0xffffff, 1);
    const LIGHT2 = new THREE.PointLight(0xffffff, 1);
    const LIGHT3 = new THREE.PointLight(0xffffff, 1);

    const SMALLER_PALLET = new SmallerPallet();
    const LARGE_PALLET = new LargePallet();

    return {
      scene: SCENE,
      camera: CAMERA,
      renderer: RENDERER,
      light1: LIGHT1,
      light2: LIGHT2,
      light3: LIGHT3,
      smallerPallet: SMALLER_PALLET.centerPoint,
      largePallet: LARGE_PALLET.centerPoint,
      lastScroll: 0,
    };
  },
  created() {
    this.recognizePalette();

    this.scene.add(this.camera);
    this.scene.add(this.light1, this.light2, this.light3);

    this.light1.position.set(50, 20, 0);

    this.light2.position.z = 1000;

    this.light3.position.x = -60;

    this.camera.position.set(0, 0, 130);

    this.smallerPallet.rotation.x += 0.4;
    this.largePallet.rotation.x += 0.4;

    window.addEventListener("wheel", this.perspectiveSeeing);
    window.addEventListener("resize", this.windowResize);
  },
  mounted() {
    this.renderer.setSize(
      this.$parent.$refs.segmentPallet3D.offsetWidth,
      this.$parent.$refs.segmentPallet3D.offsetHeight
    );
    this.$refs.canvas.appendChild(this.renderer.domElement);
    this.windowResize();
    this.animate();
  },
  destroyed() {
    this.scene.clear();
    window.removeEventListener("wheel", this.perspectiveSeeing);
    window.removeEventListener("resize", this.windowResize);
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.update();
      this.renderer.render(this.scene, this.camera);
    },
    perspectiveSeeing(e) {
      if (e.deltaY > 0) {
        this.camera.position.set(0, 0, this.camera.position.z + 1);
      } else {
        this.camera.position.set(0, 0, this.camera.position.z - 1);
      }
      this.renderer.render(this.scene, this.camera);
    },
    recognizePalette() {
      if (this.typePallet === 1) {
        this.scene.remove(this.largePallet);
        this.scene.add(this.smallerPallet);
      } else {
        this.scene.remove(this.smallerPallet);
        this.scene.add(this.largePallet);
      }
    },
    update() {
      this.smallerPallet.rotation.y += 0.01;
      this.largePallet.rotation.y += 0.01;
    },
    windowResize() {
      this.camera.aspect =
        this.$parent.$refs.segmentPallet3D.offsetWidth /
        this.$parent.$refs.segmentPallet3D.offsetHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(
        this.$parent.$refs.segmentPallet3D.offsetWidth,
        this.$parent.$refs.segmentPallet3D.offsetHeight
      );
    },
  },
  watch: {
    typePallet(newValue) {
      if (newValue == 1) {
        this.scene.remove(this.largePallet);
        this.scene.add(this.smallerPallet);
      } else {
        this.scene.remove(this.smallerPallet);
        this.scene.add(this.largePallet);
      }

      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>
