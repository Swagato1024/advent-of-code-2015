const { describe, it } = require("node:test");
const assert = require("assert");

const {
  countVisitedHouses,
  findNextCoordinate,
} = require("../src/gift-delivery");

describe("countVisitedHouses", () => {
  it("should be 1 when no directions are provided", () => {
    assert.strictEqual(countVisitedHouses(""), 1);
  });

  it("should be 2 when single direction is provided", () => {
    assert.strictEqual(countVisitedHouses("<"), 2);
    assert.strictEqual(countVisitedHouses("<"), 2);
    assert.strictEqual(countVisitedHouses("^"), 2);
    assert.strictEqual(countVisitedHouses("v"), 2);
  });
});

describe("findNextCoordinate", () => {
  it("should locate the next coordinate in the East when > is given as direction", () => {
    let coordinate = findNextCoordinate({ x: 0, y: 0 }, ">");
    assert.deepstrictEqual(coordinate, { x: 1, y: 0 });
  });

  it("should locate the next coordinate in the West when < is given as direction", () => {
    coordinate = findNextCoordinate({ x: 1, y: 0 }, "<");
    assert.deepstrictEqual(coordinate, { x: 0, y: 0 });
  });

  it("should locate the next coordinate in the North when ^ is given as direction", () => {
    coordinate = findNextCoordinate({ x: 0, y: 0 }, "^");
    assert.deepstrictEqual(coordinate, { x: 0, y: 1 });
  });

  it("should locate the next coordinate in the South when v is given as direction", () => {
    coordinate = findNextCoordinate({ x: 0, y: 1 }, "v");
    assert.deepstrictEqual(coordinate, { x: 0, y: 0 });
  });
});
