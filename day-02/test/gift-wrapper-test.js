const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual, ...assert } = require("assert");
const { GiftBox, createGiftBoxes } = require("../src/gift-box");
const {
  determineRequiredGiftWrapper,
  determineRibbonLength,
} = require("../src/gift-wrapper");

describe("createGiftBoxes", () => {
  it("should produce a single gift box when given parameters for a single box", () => {
    const rawDimensions = "2x3x4";
    const giftBoxes = createGiftBoxes(rawDimensions);

    strictEqual(giftBoxes.length, 1);
    assert.ok(giftBoxes[0] instanceof GiftBox);
  });

  it("should produce a multiple gift boxes when given parameters for multiple boxes", () => {
    const rawDimensions = "2x3x4\n1x2x3";
    const giftBoxes = createGiftBoxes(rawDimensions);

    strictEqual(giftBoxes.length, 2);
    assert.ok(giftBoxes[0] instanceof GiftBox);
  });
});

describe("determineRibbonLength", () => {
  it("should determine the total ribbon length, including the ribbon for the bow", () => {
    let dimension = { length: 2, width: 3, height: 4 };
    const giftBox1 = new GiftBox(dimension);

    dimension = { length: 1, width: 1, height: 10 };
    const giftBox2 = new GiftBox(dimension);

    const giftBoxes = [giftBox1, giftBox2];
    const actual = determineRibbonLength(giftBoxes);
    const expected = 48;

    strictEqual(actual, expected);
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
    const expected = 101;

    strictEqual(actual, expected);
  });
});
