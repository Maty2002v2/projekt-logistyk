<template>
  <div>
    <div ref="canvas"></div>
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Carton3DComponent",
  props: {
    width: Number,
    height: Number,
    depth: Number,
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

    const GEOMETRY = new THREE.BoxGeometry(this.width, this.height, this.depth);
    const TEXTURE = new THREE.TextureLoader().load(
      require("@/assets/everytexture.com-stock-paper-texture-00042.jpg")
    );
    const CUBE = new THREE.Mesh(
      GEOMETRY,
      new THREE.MeshStandardMaterial({ map: TEXTURE })
    );

    return {
      scene: SCENE,
      camera: CAMERA,
      renderer: RENDERER,
      light1: LIGHT1,
      light2: LIGHT2,
      light3: LIGHT3,
      cube: CUBE,
      lastScroll: 0,
    };
  },
  created() {
    this.scene.add(this.camera);
    this.scene.add(this.light1, this.light2, this.light3);
    this.scene.add(this.cube);

    this.light1.position.set(50, 20, 0);

    this.light2.position.z = 1000;

    this.light3.position.x = -60;

    this.camera.position.set(0, 0, 30);

    this.cube.rotation.x += 0.4;

    window.addEventListener("wheel", this.perspectiveSeeing);
    window.addEventListener("resize", this.windowResize);
  },
  mounted() {
    this.renderer.setSize(
      this.$parent.$refs.segmentCarton3D.offsetWidth,
      this.$parent.$refs.segmentCarton3D.offsetHeight
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
    update() {
      this.cube.rotation.y += 0.01;
    },
    windowResize() {
      this.camera.aspect =
        this.$parent.$refs.segmentCarton3D.offsetWidth /
        this.$parent.$refs.segmentCarton3D.offsetHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(
        this.$parent.$refs.segmentCarton3D.offsetWidth,
        this.$parent.$refs.segmentCarton3D.offsetHeight
      );
    },
  },
  watch: {
    width(newValue) {
      this.cube.scale.x = newValue;
      this.renderer.render(this.scene, this.camera);
    },
    height(newValue) {
      this.cube.scale.y = newValue;
      this.renderer.render(this.scene, this.camera);
    },
    depth(newValue) {
      this.cube.scale.z = newValue;
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
