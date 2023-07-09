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

  it("should count unique houses when multiple directions are provided", () => {
    assert.strictEqual(countVisitedHouses("^>v<"), 4);
    assert.strictEqual(countVisitedHouses("^v^v^v^v^v"), 2);
  });
});

describe("findNextCoordinate", () => {
  it("should give the East coordinate that lies next to the given coordinate", () => {
    const coordinate = findNextCoordinate({ x: 0, y: 0 }, ">");
    assert.deepStrictEqual(coordinate, { x: 1, y: 0 });
  });
  
  it("should give the West coordinate that lies next to the given coordinate", () => {
    const coordinate = findNextCoordinate({ x: 1, y: 0 }, "<");
    assert.deepStrictEqual(coordinate, { x: 0, y: 0 });
  });

  it("should give the North coordinate that lies next to the given coordinate", () => {
    const coordinate = findNextCoordinate({ x: 0, y: 0 }, "^");
    assert.deepStrictEqual(coordinate, { x: 0, y: 1 });
  });

  it("should give the South coordinate that lies next to the given coordinate", () => {
    const coordinate = findNextCoordinate({ x: 0, y: 1 }, "v");
    assert.deepStrictEqual(coordinate, { x: 0, y: 0 });
  });
});
