const moveToEast = ({ x, y }) => {
  x += 1;
  return { x, y };
};

const moveToWest = ({ x, y }) => {
  x -= 1;
  return { x, y };
};

const moveToNorth = ({ x, y }) => {
  y += 1;
  return { x, y };
};

const moveToSouth = ({ x, y }) => {
  y -= 1;
  return { x, y };
};

const decideDirectionToMove = (signal) => {
  const decoder = {
    ">": moveToEast,
    "<": moveToWest,
    "^": moveToNorth,
    v: moveToSouth,
  };

  return decoder[signal];
};

const removeDuplicates = () => {
  return [];
};

const countVisitedHouses = (signals) => {
  let currentCoordinate = { x: 0, y: 0 };
  const visitedHouses = [currentCoordinate];

  for (const signal of signals) {
    const directionToMove = decideDirectionToMove(signal);
    currentCoordinate = directionToMove(currentCoordinate);

    visitedHouses.push(currentCoordinate);
  }

  return visitedHouses.length;
};

module.exports = {
  countVisitedHouses,
  decideDirectionToMove,
  moveToEast,
  moveToWest,
  moveToNorth,
  moveToSouth,
  removeDuplicates,
};
