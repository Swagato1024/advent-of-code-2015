const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const { GiftBox } = require("../src/wrapping-paper-measurement");

describe("GiftBox", () => {
  describe("calculateSurfaceArea", () => {
    it("Should the prism's surface area be 6sq unit if all of its dimensions are one unit", () => {
      const giftBox = new GiftBox(1, 1, 1);
      const actual = giftBox.calculateSurfaceArea();
      const expected = 6;

      strictEqual(actual, expected);
    });

    it("should surface area of gift box is the total area covered by its six faces", () => {
      const giftBox = new GiftBox(2, 3, 4);

      const actual = giftBox.calculateSurfaceArea();
      const expected = 52;

      strictEqual(actual, expected);
    });
  });
});
