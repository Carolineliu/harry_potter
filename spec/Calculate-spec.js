var Calculate = require("../models/Calculate.js");

describe("Calculate", function() {
  describe("function", function() {

    it("should get correct price", function() {
      var calculate = new Calculate();

      expect(calculate.getPrice(3)).toBe(21.6);
      expect(calculate.getPrice(1)).toBe(8);
      expect(calculate.getPrice(5)).toBe(30);

    });
  });
});
