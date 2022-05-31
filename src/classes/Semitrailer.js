import * as THREE from "three";

class Semitrailer {
  centerPoin;

  constructor() {
    this.centerPoint = new THREE.Object3D();
  }

  go(w = 1, d = 1, h = 1) {
    const BLOCK_BOX = new THREE.BoxBufferGeometry(w, h, d);
    const EDGES = new THREE.EdgesGeometry(BLOCK_BOX);
    const LINE = new THREE.LineSegments(
      EDGES,
      new THREE.LineBasicMaterial({ color: 0x000000 })
    );

    this.centerPoint.add(LINE);
  }
}

export default Semitrailer;
