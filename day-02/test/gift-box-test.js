const { describe, it } = require("node:test");
const { strictEqual } = require("assert");
const { GiftBox } = require("../src/gift-box");

describe("GiftBox", () => {
  describe("surfaceArea", () => {
    it("should be 0 unit when all of its dimensions are of 0 unit", () => {
      const dimension = { length: 0, width: 0, height: 0 };
      const giftBox = new GiftBox(dimension);

      const actual = giftBox.surfaceArea();
      const expected = 0;

      strictEqual(actual, expected);
    });

    it("should be the sum of areas covered by its six faces", () => {
      let dimension = { length: 2, width: 3, height: 4 };
      const giftBox1 = new GiftBox(dimension);

      dimension = { length: 1, width: 1, height: 10 };
      const giftBox2 = new GiftBox(dimension);

      strictEqual(giftBox1.surfaceArea(), 52);
      strictEqual(giftBox2.surfaceArea(), 42);
    });
  });

  describe("giftWrapperArea", () => {
    it("should  be the sum of surface area and the area of extra paper", () => {
      let dimension = { length: 2, width: 3, height: 4 };
      const giftBox1 = new GiftBox(dimension);

      dimension = { length: 1, width: 1, height: 10 };
      const giftBox2 = new GiftBox(dimension);

      strictEqual(giftBox1.giftWrapperArea(), 58);
      strictEqual(giftBox2.giftWrapperArea(), 43);
    });
  });

  describe("volume", () => {
    it("should be 0 when all dimensions are of 0 unit", () => {
      const dimension = { length: 0, width: 0, height: 0 };
      const giftBox = new GiftBox(dimension);

      const actual = giftBox.volume();
      const expected = 0;

      strictEqual(actual, expected);
    });

    it("should be the area of the base times height", () => {
      const dimension = { length: 2, width: 3, height: 4 };
      const giftBox = new GiftBox(dimension);

      const actual = giftBox.volume();
      const expected = 24;

      strictEqual(actual, expected);
    });
  });

  describe("ribbonLength", () => {
    it("should be 0 when all dimensions are 0", () => {
      const dimension = { length: 0, width: 0, height: 0 };
      const giftBox = new GiftBox(dimension);

      const actual = giftBox.ribbonLength();
      const expected = 0;

      strictEqual(actual, expected);
    });

    it("should be smallest perimeter of any one face when dimensions are non zero", () => {
      const dimension = { length: 2, width: 3, height: 4 };
      const giftBox = new GiftBox(dimension);

      const actual = giftBox.ribbonLength();
      const expected = 34;

      strictEqual(actual, expected);
    });
  });
});
