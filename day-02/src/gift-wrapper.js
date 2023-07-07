const { GiftBox } = require("./gift-box");

const sumAll = (numbers) => numbers.reduce(sum, 0);

const sum = (a, b) => a + b;

const determineRequiredGiftWrapper = (giftBoxes) => {
  const areaOfwrappers = giftBoxes.map((giftBox) => giftBox.wrapperArea());
  return sumAll(areaOfwrappers);
};

const determineRibbonLength = (giftBoxes) => {
  const ribbonLengths = giftBoxes.map((giftBox) => giftBox.ribbonLength());

  return sumAll(ribbonLengths);
};

module.exports = {
  determineRequiredGiftWrapper,
  determineRibbonLength,
};
