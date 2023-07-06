const { describe, it } = require("node:test");
const { strictEqual } = require("assert");
const { GiftBox } = require("../src/gift-wrapper");

describe("GiftBox", () => {
  describe("surfaceArea", () => {
    it("should be 6sq unit when all of its dimensions are one unit", () => {
      const giftBox = new GiftBox(1, 1, 1);
      const actual = giftBox.surfaceArea();
      const expected = 6;

      strictEqual(actual, expected);
    });

    it("should be the sum of areas covered by its six faces", () => {
      const giftBox1 = new GiftBox(2, 3, 4);
      const giftBox2 = new GiftBox(1, 1, 10);

      strictEqual(giftBox1.surfaceArea(), 52);
      strictEqual(giftBox2.surfaceArea(), 42);
    });
  });

  describe("giftWrapperArea", () => {
    it("should  be the sum of surface area and the area of extra paper", () => {
      const giftBox1 = new GiftBox(2, 3, 4);
      const giftBox2 = new GiftBox(1, 1, 10);

      strictEqual(giftBox1.giftWrapperArea(), 58);
      strictEqual(giftBox2.giftWrapperArea(), 43);
    });
  });
});
