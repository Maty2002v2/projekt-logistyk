<template>
  <div>
    <div ref="canvas"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { mapMutations } from "vuex";
import semitrailer from "../../classes/Semitrailer.js";
import LargePallet from "../../classes/LargePallet"; //1200x800x144 25
import SmallerPallet from "../../classes/SmallerPallet"; //1200x1000x144 25

export default {
  name: "Semitrailer3DComponent",
  props: {
    widthSemitrailer: {
      type: Number,
      default: 1350,
    },
    heightSemitrailer: {
      type: Number,
      default: 275,
    },
    depthSemitrailer: {
      type: Number,
      default: 225,
    },
    maxWeightSemitrailer: {
      type: Number,
      default: 225,
    },
    convert: {
      type: Number,
    },
    typePallet: {
      type: Number,
    },
    weightOfWholePallet: {
      type: Number,
    },
    levelY: {
      type: Number,
    },
    levelX: {
      type: Number,
    },
    levelZ: {
      type: Number,
    },
    widthCarton: {
      type: Number,
    },
    heightCarton: {
      type: Number,
    },
    depthCarton: {
      type: Number,
    },
    loadTexture: {
      type: Boolean,
    },
  },
  data() {
    const SCENE = new THREE.Scene();
    const CAMERA = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / 2 / window.innerHeight,
      0.1,
      1500
    );
    const RENDERER = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const LIGHT1 = new THREE.PointLight(0xffffff, 2);
    const LIGHT2 = new THREE.PointLight(0xffffff, 1);
    const LIGHT3 = new THREE.PointLight(0xffffff, 1);

    const SEMITRAILER = new semitrailer();
    SEMITRAILER.go(
      this.widthSemitrailer,
      this.depthSemitrailer,
      this.heightSemitrailer
    );

    const PALLETS = new THREE.Object3D();

    return {
      scene: SCENE,
      camera: CAMERA,
      renderer: RENDERER,
      light1: LIGHT1,
      light2: LIGHT2,
      light3: LIGHT3,
      semitrailer: SEMITRAILER.centerPoint,
      pallets: PALLETS,
      lastScroll: 0,
      mouseX: 0,
      mouseY: 0,
      numberOfPallets: 0,
    };
  },
  created() {
    this.scene.add(this.camera);
    this.scene.add(this.light1, this.light2, this.light3);
    this.scene.add(this.semitrailer);
    this.semitrailer.add(this.pallets);

    this.light1.position.set(50, 20, 0);

    this.light2.position.z = 1000;

    this.light3.position.x = -60;

    this.camera.position.set(0, -100, 800);

    this.semitrailer.rotation.x += 0.4;

    this.pallets.position.set(0, (this.heightSemitrailer / 2) * -1, 0);

    this.palletInitialization();

    window.addEventListener("wheel", this.perspectiveSeeing);
    window.addEventListener("resize", this.windowResize);
  },
  mounted() {
    this.renderer.setSize(
      this.$parent.$refs.segmentSemitrailer3D.offsetWidth,
      this.$parent.$refs.segmentSemitrailer3D.offsetHeight
    );
    this.$refs.canvas.addEventListener(
      "mousemove",
      this.documentMouseMove,
      false
    );
    this.$refs.canvas.appendChild(this.renderer.domElement);
    this.windowResize();
    this.animate();
  },
  beforeDestroy() {
    window.removeEventListener("wheel", this.perspectiveSeeing);
    window.removeEventListener("resize", this.windowResize);
    this.$refs.canvas.removeEventListener(
      "mousemove",
      this.documentMouseMove,
      false
    );
  },
  destroyed() {
    this.scene.remove.apply(this.scene, this.scene.children);
  },
  computed: {
    ifPalletsAreTooHeavy() {
      return (
        (this.numberOfPallets + 1) * this.weightOfWholePallet <=
        this.maxWeightSemitrailer
      );
    },
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
      this.semitrailer.rotation.y += 0.01;
    },
    windowResize() {
      this.camera.aspect =
        this.$parent.$refs.segmentSemitrailer3D.offsetWidth /
        this.$parent.$refs.segmentSemitrailer3D.offsetHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(
        this.$parent.$refs.segmentSemitrailer3D.offsetWidth,
        this.$parent.$refs.segmentSemitrailer3D.offsetHeight
      );
    },
    palletInitialization() {
      const Pallet =
        this.typePallet == 1 ? new SmallerPallet() : new LargePallet();

      /*Flaga informująca po którym boku palety chcemy je rozmieścić (czy po dłuższym (2) czy krótszym (1)) */
      let whichPossibility = 2;

      let breakFlag = false;

      let firstPossibility =
        Math.floor(this.widthSemitrailer / Pallet.width) *
        Math.floor(this.depthSemitrailer / Pallet.depth);
      let secoundPossibility =
        Math.floor(this.depthSemitrailer / Pallet.width) *
        Math.floor(this.widthSemitrailer / Pallet.depth);

      this.pallets.rotation.y = Math.PI / 2;

      if (firstPossibility > secoundPossibility) {
        whichPossibility = 1;
      } else {
        Math.PI / 2;
      }
      if (whichPossibility == 1) {
        for (
          let z = 0;
          z <= this.widthSemitrailer - Pallet.width;
          z += Pallet.width
        ) {
          if (!breakFlag) {
            for (
              let x = 0;
              x <= this.depthSemitrailer - Pallet.depth;
              x += Pallet.depth
            ) {
              if (this.ifPalletsAreTooHeavy) {
                let pallet =
                  this.typePallet == 1
                    ? new SmallerPallet(this.loadTexture)
                    : new LargePallet(this.loadTexture);

                pallet.cartonInitialization(
                  this.widthCarton,
                  this.heightCarton,
                  this.depthCarton,
                  this.levelX,
                  this.levelY,
                  this.levelZ
                );

                let palletCenterPoint = pallet.centerPoint;

                palletCenterPoint.rotation.y = Math.PI / 2;
                this.pallets.add(palletCenterPoint);
                palletCenterPoint.position.set(
                  this.depthSemitrailer / 2 - Pallet.depth / 2 - x,
                  3,
                  this.widthSemitrailer / 2 - Pallet.width / 2 - z
                );
                this.numberOfPallets++;
              } else {
                breakFlag = true;
                break;
              }
            }
          } else {
            break;
          }
        }
      } else {
        for (
          let z = 0;
          z <= this.depthSemitrailer - Pallet.width;
          z += Pallet.width
        ) {
          if (!breakFlag) {
            for (
              let x = 0;
              x <= this.widthSemitrailer - Pallet.depth;
              x += Pallet.depth
            ) {
              if (this.ifPalletsAreTooHeavy) {
                let pallet =
                  this.typePallet == 1
                    ? new SmallerPallet(this.loadTexture)
                    : new LargePallet(this.loadTexture);

                pallet.cartonInitialization(
                  this.widthCarton,
                  this.heightCarton,
                  this.depthCarton,
                  this.levelX,
                  this.levelY,
                  this.levelZ
                );

                let palletCenterPoint = pallet.centerPoint;

                this.pallets.add(palletCenterPoint);
                palletCenterPoint.position.set(
                  this.depthSemitrailer / 2 - Pallet.width / 2 - z,
                  3,
                  this.widthSemitrailer / 2 - Pallet.depth / 2 - x
                );
                this.numberOfPallets++;
              } else {
                breakFlag = true;
                break;
              }
            }
          } else {
            break;
          }
        }
      }
      this.setNumberOfPallets(this.numberOfPallets);
    },

    ...mapMutations(["setNumberOfPallets"]),
  },
};
</script>
