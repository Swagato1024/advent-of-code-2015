const fs = require("fs");

const {
  createGiftBoxes,
  createGiftBox,
  determineRibbonLength,
} = require("./src/gift-wrapper");

const main = () => {
  const dimensions = fs.readFileSync("./resources/puzzle-input.txt", "utf-8");
  const giftBoxes = createGiftBoxes(dimensions, createGiftBox);
  console.log(determineRibbonLength(giftBoxes));
};

main();
