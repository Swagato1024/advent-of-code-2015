const { GiftBox } = require("./src/gift-wrapper");

const main = () => {
  const giftBox = new GiftBox(2, 3, 4);

  console.log(giftBox.surfaceArea());
  console.log(giftBox.giftWrapperArea());
};

main();
