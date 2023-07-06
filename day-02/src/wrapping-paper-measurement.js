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

  calculateAreaOfSmallestSide() {
    const dimensions = [this.#length, this.#width, this.#height];
    const smallerSides = dimensions.sort((a, b) => a - b).slice(0, 2);

    return smallerSides.reduce((a, b) => a * b);
  }
}

module.exports = { GiftBox };
