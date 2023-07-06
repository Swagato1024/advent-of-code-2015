class GiftBox {
  #length;
  #width;
  #height;

  constructor(length, width, height) {
    this.#length = length;
    this.#width = width;
    this.#height = height;
  }

  surfaceArea() {
    const l = this.#length;
    const h = this.#height;
    const w = this.#width;

    return 2 * (l * w + w * h + h * l);
  }

  #takeSmallerSides(noOfSides) {
    const dimensions = [this.#length, this.#width, this.#height];

    return dimensions.sort((a, b) => a - b).slice(0, noOfSides);
  }

  #areaOfSmallestSide() {
    const [firstSmallestSide, secondSmallestSide] = this.#takeSmallerSides(2);

    return firstSmallestSide * secondSmallestSide;
  }

  giftWrapperArea() {
    return this.surfaceArea() + this.#areaOfSmallestSide();
  }
}



module.exports = { GiftBox };
