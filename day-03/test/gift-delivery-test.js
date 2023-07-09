const { describe, it } = require("node:test");
const assert = require("assert");

const {
  countVisitedHouses,
  findNextCoordinate,
  countVisitedHousesBySantas,
} = require("../src/gift-delivery");

describe("countVisitedHouses", () => {
  it("should be 1 when no instructions are provided", () => {
    assert.strictEqual(countVisitedHouses(""), 1);
  });

  it("should be 2 when single instruction is provided", () => {
    assert.strictEqual(countVisitedHouses("<"), 2);
    assert.strictEqual(countVisitedHouses("<"), 2);
    assert.strictEqual(countVisitedHouses("^"), 2);
    assert.strictEqual(countVisitedHouses("v"), 2);
  });

  it("should count distinct houses when multiple instructions are provided", () => {
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

describe("countVisitedHousesBySantas", () => {
  it("should be 1 when no instructions are provided", () => {
    assert.strictEqual(countVisitedHousesBySantas(""), 1);
  });

  it("should be 2 when single instruction is provided", () => {
    assert.strictEqual(countVisitedHousesBySantas("<"), 2);
    assert.strictEqual(countVisitedHousesBySantas("<"), 2);
    assert.strictEqual(countVisitedHousesBySantas("^"), 2);
    assert.strictEqual(countVisitedHousesBySantas("v"), 2);
  });

  it("should be number of distinct houses when multiple instructions are provided", () => {
    assert.strictEqual(countVisitedHousesBySantas("^v"), 3);
    assert.strictEqual(countVisitedHousesBySantas("^>v<"), 3);
    assert.strictEqual(countVisitedHousesBySantas("^v^v^v^v^v"), 11);
  });
});
