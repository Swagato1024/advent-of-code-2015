const { GiftBox } = require("./src/wrapping-paper-measurement");

const main = () => {
  const giftBox = new GiftBox(2, 3, 4);

  console.log(giftBox.calculateSurfaceArea());
  console.log(giftBox.calculateAreaOfSmallestSide());
};

main();
