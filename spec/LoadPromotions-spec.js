var LoadPromotions = require("../models/LoadPromotions.js");

describe("LoadPromotions", function() {
  describe("function", function() {
    
    it("should get correct promotions information", function() {

      var loadPromotions = new LoadPromotions();
      var promotions = [{
        1: 1
      }, {
        2: 0.95
      }, {
        3: 0.9
      }, {
        4: 0.8
      }, {
        5: 0.75
      }];

      expect(loadPromotions.getPromotions()).toEqual(promotions);

    });
  });
});
