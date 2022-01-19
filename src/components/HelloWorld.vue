<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div ref="canvas"></div>
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    console.log("data");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const light = new THREE.DirectionalLight("hsl(0, 100%, 100%)");
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      side: THREE.FrontSide,
      color: "hsl(0, 100%, 50%)",
      wireframe: false,
    });
    const cube = new THREE.Mesh(geometry, material);

    return {
      scene: scene,
      camera: camera,
      renderer: renderer,
      light: light,
      cube: cube,
    };
  },
  created() {
    this.scene.add(this.camera);
    this.scene.add(this.light);
    this.scene.add(this.cube);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.light.position.set(0, 0, 10);
    this.camera.position.z = 5;
    console.log("created");
  },
  mounted() {
    console.log("mounted");
    this.$refs.canvas.appendChild(this.renderer.domElement);
    this.animate();
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
