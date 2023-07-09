const fs = require("fs");

const { countVisitedHouses } = require("./src/gift-delivery");

const main = () => {
  const directions = fs.readFileSync("./resources/puzzle-input.txt", "utf-8");
  console.log(countVisitedHouses(directions));
};

main();
