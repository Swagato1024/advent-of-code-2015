const fs = require("fs");

const {
  createGiftBoxes,
  determineRibbonLength,
  determineRequiredGiftWrapper,
} = require("./src/gift-wrapper");

const main = () => {
  const dimensions = fs.readFileSync("./resources/puzzle-input.txt", "utf-8");
  const giftBoxes = createGiftBoxes(dimensions);

  console.log("Total sq feet of wrapping paper required: ", determineRequiredGiftWrapper(giftBoxes))
  console.log("Total feet of Ribbon Required: ", determineRibbonLength(giftBoxes));
};

main();
