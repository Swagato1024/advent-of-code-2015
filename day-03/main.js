const fs = require("fs");

const { countVisitedHouses } = require("./src/gift-delivery");

const readDirections = () => {
  return fs.readFileSync("./resources/puzzle-input.txt", "utf-8");
};
const main = () => {
  const directions = readDirections();
  console.log(countVisitedHouses(directions));
};

main();
