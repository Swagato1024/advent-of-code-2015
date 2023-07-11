class Santa {
  #coordinate;

  constructor(coordinate) {
    this.#coordinate = coordinate;
  }

  moveToNorth() {
    return this.#coordinate.toNorth();
  }
}

module.exports = { Santa };
