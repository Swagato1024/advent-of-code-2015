const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const { GiftBox } = require("../src/wrapping-paper-measurement");

describe("GiftBox", () => {
  describe("calculateSurfaceArea", () => {
    it("Should the prism's surface area be one if all of its dimensions are one unit", () => {
      const giftBox = new GiftBox(1, 1, 1);
      const actual = giftBox.calculateSurfaceArea();
      const expected = 1;

      strictEqual(actual, expected);
    });
  });
});
