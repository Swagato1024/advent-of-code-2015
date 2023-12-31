const findNextCoordinate = (position, direction) => {
  const { x, y } = position;

  const displacements = {
    ">": { dx: 1, dy: 0 },
    "<": { dx: -1, dy: 0 },
    "^": { dx: 0, dy: 1 },
    "v": { dx: 0, dy: -1 },
  };

  const { dx, dy } = displacements[direction];
  return { x: x + dx, y: y + dy };
};

const generateHouseId = ({ x, y }) => `${x}:${y}`;

const countVisitedHouses = ([...directions]) => {
  let santaCoordinate = { x: 0, y: 0 };
  const firstHouseId = generateHouseId(santaCoordinate);
  const visitedHouses = new Set([firstHouseId]);

  directions.forEach((direction) => {
    santaCoordinate = findNextCoordinate(santaCoordinate, direction);
    const houseId = generateHouseId(santaCoordinate);
    visitedHouses.add(houseId);
  });

  return visitedHouses.size;
};

const getInitialCoordiantes = (noOfSantas) =>
  new Array(noOfSantas).fill().map(() => ({ x: 0, y: 0 }));

const countVisitedHousesBySantas = ([...directions]) => {
  let santa = { x: 0, y: 0 };
  let roboSanta = { x: 0, y: 0 };

  const firstHouseId = generateHouseId({ x: 0, y: 0 });
  const visitedHouses = {
    [firstHouseId]: { coordinate: { x: 0, y: 0 }, noOfTimesVisited: 1 },
  };

  const giftCarrierCoordinates = [santa, roboSanta];

  directions.forEach((direction, index) => {
    const carrierId = index % 2;
    const carrierCoordinate = giftCarrierCoordinates[carrierId];

    const coordinate = findNextCoordinate(carrierCoordinate, direction);
    giftCarrierCoordinates[carrierId] = coordinate;
    const houseId = generateHouseId(coordinate);

    if (!(houseId in visitedHouses))
      visitedHouses[houseId] = { coordinate, noOfTimesVisited: 0 };

    visitedHouses[houseId].noOfTimesVisited++;
  });

  return Object.keys(visitedHouses).length;
};

module.exports = {
  countVisitedHouses,
  findNextCoordinate,
  countVisitedHousesBySantas,
};
