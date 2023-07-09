const fs = require("fs");

const {
  countVisitedHouses,
  countVisitedHousesBySantas,
} = require("./src/gift-delivery");

const readDirections = () => {
  return fs.readFileSync("./resources/puzzle-input.txt", "utf-8");
};
const main = () => {
  const directions = readDirections();
  console.log("no of visited house by Santa:", countVisitedHouses(directions));
  console.log(
    "no of visited house by Santa and SantaRobo:",
    countVisitedHousesBySantas(directions)
  );
};

main();
