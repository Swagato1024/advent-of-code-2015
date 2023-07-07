const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual, ok } = require("assert");
const { GiftBox } = require("../src/gift-box");
const {
  determineRequiredGiftWrapper,
  calculateNecessaryRibbonLength,
  wrapperArea,
  ribbonLength,
  createGiftBox,
  createGiftBoxes,
} = require("../src/giftbox-measurements.js");

describe("calculateNecessaryRibbonLength", () => {
  it("should determine the total ribbon length, including the ribbon for the bow", () => {
    let dimension = { length: 2, width: 3, height: 4 };
    const giftBox1 = new GiftBox(dimension);

    dimension = { length: 1, width: 1, height: 10 };
    const giftBox2 = new GiftBox(dimension);

    const giftBoxes = [giftBox1, giftBox2];
    const actual = calculateNecessaryRibbonLength(giftBoxes);
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

describe("wrapperArea", () => {
  it("should  be the sum of surface area and the area of extra paper", () => {
    let dimension = { length: 0, width: 0, height: 0 };
    const giftBox = new GiftBox(dimension);

    const actual = wrapperArea(giftBox);
    const expected = 0;

    strictEqual(actual, expected);
  });

  it("should  be the sum of surface area and the area of extra paper", () => {
    let dimension = { length: 2, width: 3, height: 4 };
    const giftBox1 = new GiftBox(dimension);

    dimension = { length: 1, width: 1, height: 10 };
    const giftBox2 = new GiftBox(dimension);

    strictEqual(wrapperArea(giftBox1), 58);
    strictEqual(wrapperArea(giftBox2), 43);
  });
});

describe("ribbonLength", () => {
  it("should be 0 when all dimensions are 0", () => {
    const dimension = { length: 0, width: 0, height: 0 };
    const giftBox = new GiftBox(dimension);

    const actual = ribbonLength(giftBox);
    const expected = 0;

    strictEqual(actual, expected);
  });

  it("should be smallest perimeter of any one face when dimensions are non zero", () => {
    const dimension = { length: 2, width: 3, height: 4 };
    const giftBox = new GiftBox(dimension);

    const actual = ribbonLength(giftBox);
    const expected = 34;

    strictEqual(actual, expected);
  });
});

describe("createGiftBoxes", () => {
  it("should produce a single gift box when given parameters for a single box", () => {
    const rawDimensions = "2x3x4";
    const giftBoxes = createGiftBoxes(rawDimensions);

    strictEqual(giftBoxes.length, 1);
    ok(giftBoxes[0] instanceof GiftBox);
  });

  it("should produce a multiple gift boxes when given parameters for multiple boxes", () => {
    const rawDimensions = "2x3x4\n1x2x3";
    const giftBoxes = createGiftBoxes(rawDimensions);

    strictEqual(giftBoxes.length, 2);
    ok(giftBoxes[0] instanceof GiftBox);
  });
});

describe("createGiftBox", () => {
  it("should make a gift box from raw dimensions", () => {
    const rawDimensions = "2x3x4";
    const giftBox = createGiftBox(rawDimensions);

    ok(giftBox instanceof GiftBox);
  });
});
