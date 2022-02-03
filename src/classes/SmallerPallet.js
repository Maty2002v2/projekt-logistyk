import Pallet from "./Pallet";

class SmallerPallet extends Pallet {
  width = 120;
  depth = 80;
  height = 14.4;
  weight = 25;

  constructor() {
    super();
    this.createPallet();
  }

  createPallet() {
    this.createBoard(120, 1, 10, 0, 0, 0);
    this.createBoard(120, 1, 10, 0, 0, 35);
    this.createBoard(120, 1, 10, 0, 0, -35);

    this.createConnectorBox(10, 10, 10, 45, 5, 0);
    this.createConnectorBox(10, 10, 10, -10, 5, 0);
    this.createConnectorBox(10, 10, 10, -65, 5, 0);

    this.createConnectorBox(10, 10, 10, 45, 5, 35);
    this.createConnectorBox(10, 10, 10, -10, 5, 35);
    this.createConnectorBox(10, 10, 10, -65, 5, 35);

    this.createConnectorBox(10, 10, 10, 45, 5, -35);
    this.createConnectorBox(10, 10, 10, -10, 5, -35);
    this.createConnectorBox(10, 10, 10, -65, 5, -35);

    this.createBoard(10, 1, 80, 0, 10, 0); //vertical
    this.createBoard(10, 1, 80, 55, 10, 0); //vertical
    this.createBoard(10, 1, 80, -55, 10, 0); //vertical

    this.createBoard(120, 1, 10, 0, 11, 35);
    this.createBoard(120, 1, 10, 0, 11, 18);
    this.createBoard(120, 1, 10, 0, 11, 0);
    this.createBoard(120, 1, 10, 0, 11, -18);
    this.createBoard(120, 1, 10, 0, 11, -35);
  }

  cartonInitialization(w = 1, h = 1, d = 1, lx = 1, ly = 1, lz = 1) {
    //, axisX = 0, axisY = 0, axisZ = 0
    // let blocks = [];
    // console.log(d, lz, d * lz);
    // console.log(w, lx, w * lx);
    // console.log(h, ly, h * ly);
    for (let z = 0; z < d * lz; z += d) {
      for (let x = 0; x < w * lx; x += w) {
        for (let y = 12 + h / 2; y - 12 <= h * ly; y += h) {
          // blocks.push(
          this.createBlock(w, h, d, x - (120 - w) / 2, y, z - (80 - d) / 2 - 2);
          // );
        }
      }
    }
  }
}

export default SmallerPallet;
