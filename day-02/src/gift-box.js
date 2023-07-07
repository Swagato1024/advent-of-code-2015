class GiftBox {
  #length;
  #width;
  #height;

  constructor({ length, width, height }) {
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

  #arrangeDimensionsInAsc() {
    const dimensions = [this.#length, this.#width, this.#height];

    return dimensions.sort((a, b) => a - b);
  }

  #slackArea() {
    const [firstSmallestSide, secondSmallestSide] =
      this.#arrangeDimensionsInAsc();

    return firstSmallestSide * secondSmallestSide;
  }

  giftWrapperArea() {
    return this.surfaceArea() + this.#slackArea();
  }

  volume() {
    return this.#height * this.#width * this.#length;
  }

  ribbonLength() {
    const [firstSmallestSide, secondSmallestSide] =
      this.#arrangeDimensionsInAsc();
      
    return 2 * (firstSmallestSide + secondSmallestSide) + this.volume();
  }
}

module.exports = {GiftBox};