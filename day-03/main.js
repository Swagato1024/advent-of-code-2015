const { countVisitedHouses } = require("./src/gift-delivery")

const main = () => {
  const signals = fs.readFileSync("./resources/puzzle-input.txt", "utf");
  console.log(countVisitedHouses('>'));
}

main()