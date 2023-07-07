const { GiftBox } = require("./gift-box");

const wrapperArea = (giftBox) => {
  return giftBox.surfaceArea() + giftBox.slackArea();
};

const ribbonLength = (giftBox) => {
  return 2 * giftBox.smallestPerimeter() + giftBox.volume();
};

const determineRequiredGiftWrapper = (giftBoxes) => {
  return giftBoxes.reduce(
    (totalArea, giftBox) => totalArea + wrapperArea(giftBox),
    0
  );
};

const calculateNecessaryRibbonLength = (giftBoxes) => {
  return giftBoxes.reduce(
    (totalRibbonLength, giftBox) => totalRibbonLength + ribbonLength(giftBox),
    0
  );
};

const createGiftBox = (rawDimensions) => {
  const [length, width, height] = rawDimensions
    .split("x")
    .map((n) => parseInt(n));

  return new GiftBox({ length, width, height });
};

const createGiftBoxes = (rawDimensions) => {
  const dimensions = rawDimensions.split("\n");

  return dimensions.map(createGiftBox);
};

module.exports = {
  determineRequiredGiftWrapper,
  calculateNecessaryRibbonLength,
  wrapperArea,
  ribbonLength,
  createGiftBox,
  createGiftBoxes,
};
