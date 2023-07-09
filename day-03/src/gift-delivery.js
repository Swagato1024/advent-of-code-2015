const findNextCoordinate = (position, direction) => {
  const { x, y } = position;

  const displacements = {
    ">": { dx: 1, dy: 0 },
    "<": { dx: -1, dy: 0 },
    "^": { dx: 0, dy: 1 },
    v: { dx: 0, dy: -1 },
  };

  const { dx, dy } = displacements[direction];
  return { x: x + dx, y: y + dy };
};

const generateHouseId = ({ x, y }) => `${x}:${y}`;

const countVisitedHouses = ([...directions]) => {
  let coordinate = { x: 0, y: 0 };
  const firstHouseId = `0:0`;
  const visitedHouses = new Set([firstHouseId]);

  directions.forEach((direction) => {
    coordinate = findNextCoordinate(coordinate, direction);
    const houseId = generateHouseId(coordinate);
    visitedHouses.add(houseId);
  });

  return visitedHouses.size;
};

const countVisitedHousesBySantas = ([...directions]) => {
  const firstHouseId = `0:0`;
  const visitedHouses = new Set([firstHouseId]);
  const giftDeliverersCoordinate = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];

  directions.forEach((direction, index) => {
    const santaId = index % giftDeliverersCoordinate.length;
    const santaCoordinate = giftDeliverersCoordinate[santaId];
    
    const coordinate = findNextCoordinate(santaCoordinate, direction);
    giftDeliverersCoordinate[santaId] = coordinate;
    const houseId = generateHouseId(coordinate);
    visitedHouses.add(houseId);
  });

  return visitedHouses.size;
};

module.exports = {
  countVisitedHouses,
  findNextCoordinate,
  countVisitedHousesBySantas,
};
