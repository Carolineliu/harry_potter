var LoadPromotions = require("./LoadPromotions.js");

function Basket() {
  this.basketItems = [];
}
// 提问：如果我们可以一次性获取basketItems,
//并把basketItems处理成我们想要的数据，那么不就只需要一个Basket类就可以。
// function Basket(basketItems){
//   this.basketItems=basketItems
// }

Basket.prototype.addBasketItem = function(newBasketItem) {
  var judge = 1;
  this.basketItems.forEach(function(val) {
    if (val.bookInfo.title === newBasketItem.bookInfo.title) {
      val.count += newBasketItem.count;
      judge = 0;
    }
  });
  if (judge) {
    this.basketItems.push(newBasketItem);
  }
};

Basket.prototype.calculateDifferentBooksLength = function(basketItems) {
  var booksLength = [];
  var length = basketItems.length;

  while (length > 0) {
    length = basketItems.filter(function(val) {
      return val.count > 0;
    }).length;
    
    booksLength.push(length);

    basketItems.forEach(function(val) {
      val.count--;
    });
  }
  return booksLength;
};

Basket.prototype.getMoreDiscountCount = function(booksLength) {
  var count1 = 0;
  var count2 = 0;
  booksLength.forEach(function(val) {
    if (val === 5) {
      count1++;
    }
    if (val === 3) {
      count2++;
    }
  });
  if (count1 > 0 && count2 > 0) {
    return count1 < count2 ? count1 : count2;
  } else {
    return 0;
  }
};

Basket.prototype.getMinPrice = function(basketItems) {
  var sameBasketItems = basketItems;
  var booksLength = this.calculateDifferentBooksLength(sameBasketItems);
  var count = this.getMoreDiscountCount(booksLength);
  var price = 0;
  var loadPromotions = new LoadPromotions().getPromotions();
  booksLength.forEach(function(val) {
    loadPromotions.forEach(function(infos) {
      var info = Object.keys(infos)[0];
      if (val == info) {
        price += infos[info] * val * basketItems[0].bookInfo.price;
      }
    });
  });
  price = price - count * 0.4;
  return parseFloat(price.toFixed(2));
};

module.exports = Basket;
