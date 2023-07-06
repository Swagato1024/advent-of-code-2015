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

  volume() {
    return this.#height * this.#width * this.#length;
  }
}

const format = (giftBoxDimension) => {
  const [length, width, height] = giftBoxDimension.split("x").map((n) => +n);
  return { length, width, height };
};

const createGiftBox = (dimension) => new GiftBox(dimension);

const createGiftBoxes = (dimensionsAsText, giftMaker) => {
  if (dimensionsAsText.length === 0) return [];

  const dimensions = dimensionsAsText.split("\n").map(format);

  return dimensions.map(giftMaker);
};

const sumAll = (list) =>
  list.reduce((sum, element) => {
    return sum + element;
  }, 0);

const determineRequiredGiftWrapper = (giftBoxes) => {
  const areaOfwrappers = giftBoxes.map((giftBox) => giftBox.giftWrapperArea());
  return sumAll(areaOfwrappers);
};

module.exports = {
  GiftBox,
  createGiftBoxes,
  createGiftBox,
  determineRequiredGiftWrapper,
};
