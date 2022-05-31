import * as THREE from "three";

class Pallet {
  centerPoint;
  #loadPalletTexture;

  constructor(loadPalletTexture = true) {
    this.#loadPalletTexture = loadPalletTexture;
    this.centerPoint = new THREE.Object3D();
  }

  createCarton(w = 1, h = 1, d = 1, x, y, z) {
    const BLOCK_BOX = new THREE.BoxBufferGeometry(w, h, d);
    const BLOCK = new THREE.Mesh(
      BLOCK_BOX,
      new THREE.MeshBasicMaterial({ color: 0xcc6633 })
    );

    this.centerPoint.add(BLOCK);
    BLOCK.position.x = x;
    BLOCK.position.y = y;
    BLOCK.position.z = z + 2;

    const EDGES = new THREE.EdgesGeometry(BLOCK_BOX);
    const LINE = new THREE.LineSegments(
      EDGES,
      new THREE.LineBasicMaterial({ color: 0xffffff })
    );
    this.centerPoint.add(LINE);
    LINE.position.x = x;
    LINE.position.y = y;
    LINE.position.z = z + 2;
  }

  createBox(w, h, d) {
    const BOARD_GEO = new THREE.BoxBufferGeometry(w, h, d);
    const TEXTURE = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(
        require("@/assets/Wood_Pattern_001_basecolor.jpg")
      ),
    });
    const NO_TEXTURE = new THREE.MeshBasicMaterial({ color: 0xa34200 });
    const MESH = new THREE.Mesh(
      BOARD_GEO,
      this.#loadPalletTexture ? TEXTURE : NO_TEXTURE
    );

    return MESH;
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
