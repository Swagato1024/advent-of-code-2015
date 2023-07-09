const findNextCoordinate = (position, direction) => {
  const { x, y } = position;

  const decoder = {
    ">": { dx: 1, dy: 0 },
    "<": { dx: -1, dy: 0 },
    "^": { dx: 0, dy: 1 },
    v: { dx: 0, dy: -1 },
  };

  const { dx, dy } = decoder[direction];
  return { x: x + dx, y: y + dy };
};

const generateHouseId = ({ x, y }) => `${x}:${y}`;

const countVisitedHouses = (directions) => {
  let coordinate = { x: 0, y: 0 };
  const firstHouseId = `0:0`;
  const visitedHouses = new Set([firstHouseId]);

  for (const direction of directions) {
    coordinate = findNextCoordinate(coordinate, direction);
    const houseId = generateHouseId(coordinate);
    visitedHouses.add(houseId);
  }

  return visitedHouses.size;
};

module.exports = {
  countVisitedHouses,
  findNextCoordinate,
};
