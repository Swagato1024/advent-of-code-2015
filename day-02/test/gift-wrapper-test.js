const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const {
  GiftBox,
  createGiftBoxes,
  determineRequiredGiftWrapper,
  createGiftBox,
} = require("../src/gift-wrapper");

describe("GiftBox", () => {
  describe("surfaceArea", () => {
    it("should be 6sq unit when all of its dimensions are one unit", () => {
      const dimension = { length: 1, width: 1, height: 1 };
      const giftBox = new GiftBox(dimension);

      const actual = giftBox.surfaceArea();
      const expected = 6;

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

  describe("createGiftBoxes", () => {
    it("should generate 0 gift boxes when no dimension is specified", (context) => {
      const dimensions = "";
      const createGiftBox = context.mock.fn();
      const actual = createGiftBoxes(dimensions, createGiftBox);
      const expected = [];

      deepStrictEqual(actual, expected);
      strictEqual(createGiftBox.mock.callCount(), 0);
    });

    it("should gift boxes of specified dimensions", (context) => {
      const dimensions = "7x5x27";
      const createGiftBox = context.mock.fn();

      createGiftBoxes(dimensions, createGiftBox).length;

      strictEqual(createGiftBox.mock.callCount(), 1);
      deepStrictEqual(createGiftBox.mock.calls[0].arguments[0], {
        length: 7,
        width: 5,
        height: 27,
      });
    });
  });

  describe("determineRequiredGiftWrapper", () => {
    it("should sum up all the gift wrapper's area", () => {
      let dimension = { length: 2, width: 3, height: 4 };
      const giftBox1 = new GiftBox(dimension);

      dimension = { length: 1, width: 1, height: 10 };
      const giftBox2 = new GiftBox(dimension);

      const giftBoxes = [giftBox1, giftBox2];

      const actual = determineRequiredGiftWrapper(giftBoxes);
      console.log(actual);

      const expected = 101;

      strictEqual(actual, expected);
    });
  });
});
