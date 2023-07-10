const { describe, it } = require("node:test");
const assert = require("assert");
const { Coordiante } = require("../src/coordinate");

describe("Coordiante", () => {
  describe("toNorth", () => {
    it("should change the current coordinate to the adjacent North coordinate", () => {
      const coordinate = new Coordiante(0, 0);
      const northCoordiante = coordinate.toNorth();
      const expectedCoordiante = new Coordiante(0, 1);

      assert.ok(northCoordiante.equals(expectedCoordiante));
    });
  });
});
