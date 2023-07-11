const { describe, it } = require("node:test");
const assert = require("assert");
const { Coordiante } = require("../src/coordinate");
const { Santa } = require("../src/santa");

describe("Santa", () => {
  describe("moveToNorth", () => {
    it("should move Santa from it's current position to adjacent North Coordinate ", () => {
      const santa = new Santa(new Coordiante(0, 0));
      const coordinate = santa.moveToNorth();
      const expectedCoordinate = new Coordiante(0, 1);

      assert.ok(coordinate.equals(expectedCoordinate));
    });
  });
});
