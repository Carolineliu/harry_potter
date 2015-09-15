function LoadPromotions() {
}

LoadPromotions.prototype.getPromotions = function() {
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
  return promotions;
};

module.exports = LoadPromotions;
