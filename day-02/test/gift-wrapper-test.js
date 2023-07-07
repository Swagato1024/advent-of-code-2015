const { describe, it } = require("node:test");
const { strictEqual, deepStrictEqual } = require("assert");
const { GiftBox } = require("../src/gift-box");
const {
  createGiftBoxes,
  determineRequiredGiftWrapper,
  determineRibbonLength,
  extractDimensions,
  getSingleBoxDimensions,
} = require("../src/gift-wrapper");

// describe.skip("createGiftBoxes", () => {
// it("should create gift box of specified dimensions", (context) => {
//   const dimensions = "7x5x27";
//   const createGiftBox = context.mock.fn();

//   createGiftBoxes(dimensions, createGiftBox);

//   strictEqual(createGiftBox.mock.callCount(), 1);
//   deepStrictEqual(createGiftBox.mock.calls[0].arguments[0], {
//     length: 7,
//     width: 5,
//     height: 27,
//   });
// });

//   it("should ")
// });

describe("extractDimensions", () => {
  it("should extract dimensions of a single box", () => {
    const rawDimensions = "7x5x27";
    const actual = extractDimensions(rawDimensions);
    const expected = [{ length: 7, width: 5, height: 27 }];

    deepStrictEqual(actual, expected);
  });

  it("should extract dimensions of multiple boxes", () => {
    const rawDimensions = "7x5x27\n2x3x4";
    const actual = extractDimensions(rawDimensions);
    const expected = [
      { length: 7, width: 5, height: 27 },
      { length: 2, width: 3, height: 4 },
    ];

    deepStrictEqual(actual, expected);
  });
});

describe("determineRibbonLength", () => {
  it("should be the lenght of ribbon to wrap plus feet of ribbon for the bow", () => {
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

describe("getDimensionOfSingleBox", () => {
  it("should generate dimensions from the given string", () => {
    let rawDimensions = "2x3x4";

    const actual = getSingleBoxDimensions(rawDimensions);
    const expected = { length: 2, width: 3, height: 4 };

    deepStrictEqual(actual, expected);
  });
});
