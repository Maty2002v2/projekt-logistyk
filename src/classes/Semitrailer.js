import * as THREE from "three";

class Semitrailer {
  centerPoin;

  constructor() {
    this.centerPoint = new THREE.Object3D();
  }

  go(w = 1, d = 1, h = 1) {
    const blockBox = new THREE.BoxBufferGeometry(w, h, d);
    // const material = new THREE.MeshBasicMaterial({
    //   color: 0x00ff00,
    //   transparent: true,
    //   opacity: 0.5,
    // });
    // const cube = new THREE.Mesh(blockBox, material);

    const edges = new THREE.EdgesGeometry(blockBox);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0x000000 })
    );

    this.centerPoint.add(line);
  }
}

export default Semitrailer;
