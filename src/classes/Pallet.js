import * as THREE from "three";

class Pallet {
  centerPoint;

  constructor() {
    this.centerPoint = new THREE.Object3D();
  }

  createBlock(w = 1, h = 1, d = 1, x, y, z) {
    const blockBox = new THREE.BoxBufferGeometry(w, h, d);

    // const texture = new THREE.TextureLoader().load(
    //   "http://localhost/texture/Wood_Pattern_001_basecolor.jpg"
    // );

    const block = new THREE.Mesh(
      blockBox,
      new THREE.MeshBasicMaterial({ color: 0x000ff0 })
      // new THREE.MeshStandardMaterial({ map: texture })
    );

    this.centerPoint.add(block);
    block.position.x = x;
    block.position.y = y;
    block.position.z = z + 2;

    const edges = new THREE.EdgesGeometry(blockBox);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xffffff })
    );
    this.centerPoint.add(line);
    line.position.x = x;
    line.position.y = y;
    line.position.z = z + 2;
  }

  createBox(w, h, d) {
    const boardGeo = new THREE.BoxBufferGeometry(w, h, d);

    // const texture = new THREE.TextureLoader().load(
    //   "http://localhost/texture/Wood_Pattern_001_basecolor.jpg"
    // );

    const mesh = new THREE.Mesh(
      boardGeo,
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
      // new THREE.MeshStandardMaterial({ map: texture })
    );

    return mesh;
  }

  createBoard(w = 1, h = 1, d = 1, x = 0, y = 0, z = 0) {
    let box;

    box = this.createBox(w, h, d);
    box.position.set(x, y, z);

    this.centerPoint.add(box);
  }

  createConnectorBox(
    w = 1,
    h = 1,
    d = 1,
    x = 0,
    y = 0,
    z = 0,
    color = 0xffffff
  ) {
    const connectorBox = this.createBox(w, h, d, color);

    connectorBox.position.set(x + 10, y, z);

    this.centerPoint.add(connectorBox);
  }
}

export default Pallet;
