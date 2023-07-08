const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const { countVisitedHouses, moveToEast, moveToNorth, moveToWest, moveToSouth, decideDirectionToMove, removeDuplicates } = require("../src/gift-delivery");

describe("countVisitedHouses", () => {
  it("should count be 1 when no signal is send", () => {
    const actual = countVisitedHouses("");
    const expected = 1;

    strictEqual(actual, expected);
  });

  it("should count be 2 when single signal is send", () => {
    const actual = countVisitedHouses(">");
    const expected = 2;

    strictEqual(actual, expected);
  });
});

describe("decideDirectionToMove", () => {
  it("should decide to move To East for signal >", () => {
    const actual = decideDirectionToMove(">");
    const expected = moveToEast;

    strictEqual(actual, expected);
  });
});

describe("moveToEast", () => {
  it("should increment the x coordinate of current coordinate", () => {
    const coordinate = {x: 0, y: 0};

    const actual = moveToEast(coordinate);
    const expected = {x: 1, y: 0};

    deepStrictEqual(actual, expected);
  })
})

describe("moveToWest", () => {
  it("should decrement the x coordinate of current coordinate", () => {
    const coordinate = {x: 1, y: 0};

    const actual = moveToWest(coordinate);
    const expected = {x: 0, y: 0};

    deepStrictEqual(actual, expected);
  })
})

describe("moveToNorth", () => {
  it("should increment the y coordinate of current coordinate", () => {
    const coordinate = {x: 0, y: 0};

    const actual = moveToNorth(coordinate);
    const expected = {x: 0, y: 1};

    deepStrictEqual(actual, expected);
  })
})

describe("moveToSouth", () => {
  it("should decrement the y coordinate of current coordinate", () => {
    const coordinate = {x: 0, y: 1};

    const actual = moveToSouth(coordinate);
    const expected = {x: 0, y: 0};

    deepStrictEqual(actual, expected);
  })
})

describe("removeDuplicates", () => {
  it("should remove empty list when empty list is passed", () => {
    const actual = removeDuplicates([]);
    const expected = [];

    deepStrictEqual(actual, expected);
  })
})

