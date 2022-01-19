import * as THREE from "three";

class Semitrailer {
  centerPoin;

  constructor() {
    this.centerPoint = new THREE.Object3D();
  }

  go(w = 1, d = 1, h = 1) {
    const blockBox = new THREE.BoxBufferGeometry(w, h, d);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(blockBox, material);

    this.centerPoint.add(cube);
  }
}

export default Semitrailer;
