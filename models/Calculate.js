var LoadPromotions = require("./LoadPromotions.js");

function Calculate() {

}

Calculate.prototype.getPrice = function(length) {
  var price = 0;
  var loadPromotions = new LoadPromotions().getPromotions();

  loadPromotions.forEach(function(infos) {
    info = Object.keys(infos)[0];
    if (length == info) {
      price = infos[info] * length * 8;
    }
  });

  return price;
};

module.exports = Calculate;
