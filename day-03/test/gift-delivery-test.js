const {describe, it} = require("node:test");
const {strictEqual, deepStrictEqual} = require("assert");
const { countVisitedHouses } = require("../src/gift-delivery");

describe("countVisitedHouses", () => {
  it("should count be 0 when no house is visited", () => {
    const actual = countVisitedHouses('')
    const expected = 0;

    strictEqual(actual, expected);
  })
})