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
  let santaCoordinate = { x: 0, y: 0 };
  const firstHouseId = `0:0`;
  const visitedHouses = new Set([firstHouseId]);

  directions.forEach((direction) => {
    santaCoordinate = findNextCoordinate(santaCoordinate, direction);
    const houseId = generateHouseId(santaCoordinate);
    visitedHouses.add(houseId);
  });

  return visitedHouses.size;
};

const countVisitedHousesBySantas = ([...directions]) => {
  const firstHouseId = `0:0`;
  const visitedHouses = new Set([firstHouseId]);
  const giftCarrierCoordinates = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];

  directions.forEach((direction, index) => {
    const carrierId = index % giftCarrierCoordinates.length;
    const carrierCoordinate = giftCarrierCoordinates[carrierId];
    
    const coordinate = findNextCoordinate(carrierCoordinate, direction);
    giftCarrierCoordinates[carrierId] = coordinate;
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
