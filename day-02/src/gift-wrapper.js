const { GiftBox } = require("./gift-box");

const sumAll = (list) => list.reduce(sum, 0);

const sum = (a, b) => a + b;

const getSingleBoxDimensions = (dimensions) => {
  const [length, width, height] = dimensions.split("x").map((n) => parseInt(n));

  return { length, width, height };
};

const extractDimensions = (rawDimensions) =>
  rawDimensions.split("\n").map(getSingleBoxDimensions);

const createGiftBoxes = (rawDimensions) => {
  const dimensions = extractDimensions(rawDimensions);

  return dimensions.map((dimension) => new GiftBox(dimension));
};

const determineRequiredGiftWrapper = (giftBoxes) => {
  const areaOfwrappers = giftBoxes.map((giftBox) => giftBox.giftWrapperArea());
  return sumAll(areaOfwrappers);
};

const determineRibbonLength = (giftBoxes) => {
  const ribbonLengths = giftBoxes.map((giftBox) => giftBox.ribbonLength());

  return sumAll(ribbonLengths);
};

module.exports = {
  createGiftBoxes,
  determineRequiredGiftWrapper,
  determineRibbonLength,
  extractDimensions,
  getSingleBoxDimensions,
};
