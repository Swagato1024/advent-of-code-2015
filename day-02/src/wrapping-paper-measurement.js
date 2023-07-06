class GiftBox {
  #length;
  #width;
  #height;

  constructor(length, width, height) {
    this.#length = length;
    this.#width = width;
    this.#height = height;
  }

  calculateSurfaceArea() {
    const l = this.#length;
    const h = this.#height;
    const w = this.#width;

    return 2 * (l * w + w * h + h * l);
  }
}

module.exports = { GiftBox };
