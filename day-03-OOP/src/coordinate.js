class Coordiante {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  equals(coordinate) {
    console.log()
    return this.#x === coordinate.#x && this.#y === coordinate.#y;
  }

  toNorth() {
    const x = this.#x + 0;
    const y = this.#y + 1;

    return new Coordiante(x, y);
  }
}

module.exports = {
  Coordiante,
};
