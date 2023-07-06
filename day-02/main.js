const fs = require("fs");

const {
  GiftBox,
  createGiftBoxes,
  determineRequiredGiftWrapper,
  createGiftBox,
} = require("./src/gift-wrapper");

const main = () => {
  const dimensions = fs.readFileSync("./resources/puzzle-input.txt", "utf-8");
  const giftBoxes = createGiftBoxes(dimensions, createGiftBox);
  console.log(determineRequiredGiftWrapper(giftBoxes));
};

main();
