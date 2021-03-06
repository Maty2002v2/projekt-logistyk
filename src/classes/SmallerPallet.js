import Pallet from "./Pallet";

class SmallerPallet extends Pallet {
  width = 120;
  depth = 80;
  height = 14.4;
  weight = 25;

  constructor(loadTexture) {
    super(loadTexture);
    this.createPallet();
  }

  /* Tworzenie palety przez tworzenie jej poszczegolnych elementów */
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

  /* Wyliczanie i dodawanie kartonów do sceny przez createCarton() metode*/
  cartonInitialization(w = 1, h = 1, d = 1, lx = 1, ly = 1, lz = 1) {
    /* Sprawdzenie liczb kartonów w poszczególnych poziomach */
    if (lx < 2 && ly < 2 && lz < 2) {
      //imo powinno byc lub
      for (let z = 0; z < d * lz; z += d) {
        for (let x = 0; x < w * lx; x += w) {
          for (let y = 12 + h / 2; y - 12 <= h * ly; y += h) {
            this.createCarton(
              w,
              h,
              d,
              x - (120 - w) / 2,
              y,
              z - (80 - d) / 2 - 2
            );
          }
        }
      }

      /* Dodanie warunków dzięki którym powstanie tylko "ramka", czyli nie widoczne kartony
      (te w środku) nie będą tworzone i dodawane do sceny) */
    } else {
      for (let z = 0; z < d * lz; z += d) {
        let lastZ = z + d >= d * lz ? z : 0;
        for (let x = 0; x < w * lx; x += w) {
          let lastX = x + w >= w * lx ? x : 0;
          for (let y = 12 + h / 2; y - 12 <= h * ly; y += h) {
            let lastY = y + h - 12 >= h * ly ? y : 0;
            if (
              !(
                y == 12 + h / 2 ||
                y == lastY ||
                z == 0 ||
                z == lastZ ||
                x == 0 ||
                x == lastX
              )
            ) {
              continue;
            }

            this.createCarton(
              w,
              h,
              d,
              x - (120 - w) / 2,
              y,
              z - (80 - d) / 2 - 2
            );
          }
        }
      }
    }
  }
}

export default SmallerPallet;
