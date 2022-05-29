import * as THREE from "three";

class Pallet {
  centerPoint;
  #loadPalletTexture;

  constructor(loadPalletTexture = true) {
    this.#loadPalletTexture = loadPalletTexture;
    this.centerPoint = new THREE.Object3D();
  }

  createCarton(w = 1, h = 1, d = 1, x, y, z) {
    const blockBox = new THREE.BoxBufferGeometry(w, h, d);

    // const texture = new THREE.TextureLoader().load(
    //   require("@/assets/everytexture.com-stock-paper-texture-00042.jpg")
    // );

    const block = new THREE.Mesh(
      blockBox,
      new THREE.MeshBasicMaterial({ color: 0xcc6633 })
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
    const texture = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(
        require("@/assets/Wood_Pattern_001_basecolor.jpg")
      ),
    });
    const noTexture = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(
      boardGeo,
      this.#loadPalletTexture ? texture : noTexture
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
