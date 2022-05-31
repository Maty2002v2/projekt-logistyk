<template>
  <div ref="canvas"></div>
</template>

<script>
import * as THREE from "three";
import LargePallet from "../../classes/LargePallet.js"; //1200x800x144 25
import SmallerPallet from "../../classes/SmallerPallet"; //1200x1000x144 25

export default {
  name: "Result3DComponent",
  props: {
    typePallet: Number,
    widthCarton: Number,
    heightCarton: Number,
    depthCarton: Number,
    levelX: Number,
    levelY: Number,
    levelZ: Number,
    loadTexture: Boolean,
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

    const LIGHT1 = new THREE.PointLight(0xffffff, 2);
    const LIGHT2 = new THREE.PointLight(0xffffff, 1);
    const LIGHT3 = new THREE.PointLight(0xffffff, 1);
    const LIGHT4 = new THREE.PointLight(0xffffff, 2);

    const PALLET =
      this.typePallet == 1
        ? new SmallerPallet(this.loadTexture)
        : new LargePallet(this.loadTexture);

    PALLET.cartonInitialization(
      this.widthCarton,
      this.heightCarton,
      this.depthCarton,
      this.levelX,
      this.levelY,
      this.levelZ
    );

    return {
      scene: SCENE,
      camera: CAMERA,
      renderer: RENDERER,
      light1: LIGHT1,
      light2: LIGHT2,
      light3: LIGHT3,
      light4: LIGHT4,
      pallet: PALLET.centerPoint,
      lastScroll: 0,
      mouseX: 0,
      mouseY: 0,
    };
  },
  created() {
    this.scene.add(this.camera);
    this.scene.add(this.light1, this.light2, this.light3, this.light4);
    this.scene.add(this.pallet);

    this.light1.position.set(130, 100, 0);
    this.light2.position.z = 200;
    this.light3.position.x = -130;
    this.light4.position.y = 1000;

    this.camera.position.set(0, 0, 350);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.pallet.rotation.x += 0.4;

    window.addEventListener("wheel", this.perspectiveSeeing);
    window.addEventListener("resize", this.windowResize);
    window.addEventListener("mousemove", this.documentMouseMove, false);
  },
  mounted() {
    this.renderer.setSize(
      this.$parent.$refs.segmentResultsPallet3D.offsetWidth,
      this.$parent.$refs.segmentResultsPallet3D.offsetHeight
    );
    this.$refs.canvas.appendChild(this.renderer.domElement);
    this.windowResize();
    this.animate();
  },
  destroyed() {
    this.scene.remove.apply(this.scene, this.scene.children);
    window.removeEventListener("wheel", this.perspectiveSeeing);
    window.removeEventListener("resize", this.windowResize);
    window.addEventListener("mousemove", this.documentMouseMove, false);
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.update();
      this.renderer.render(this.scene, this.camera);
    },
    documentMouseMove(e) {
      this.mouseX = e.clientX - window.innerWidth / 2;
      this.mouseY = e.clientY - window.innerHeight / 2;
    },
    perspectiveSeeing(e) {
      if (e.deltaY > 0) {
        this.camera.position.set(0, 0, this.camera.position.z - 1);
      } else {
        this.camera.position.set(0, 0, this.camera.position.z + 1);
      }
      this.renderer.render(this.scene, this.camera);
    },
    update() {
      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
      this.camera.lookAt(this.scene.position);
    },
    windowResize() {
      this.camera.aspect =
        this.$parent.$refs.segmentResultsPallet3D.offsetWidth /
        this.$parent.$refs.segmentResultsPallet3D.offsetHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(
        this.$parent.$refs.segmentResultsPallet3D.offsetWidth,
        this.$parent.$refs.segmentResultsPallet3D.offsetHeight
      );
    },
  },
};
</script>
