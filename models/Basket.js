var Calculate = require("./Calculate.js");

function Basket() {
  this.basketItems = [];
}

Basket.prototype.addBook = function(book) {
  var judge = 1;
  var boos = {};

  this.basketItems.forEach(function(val) {
    if (val.title === book.getBook().title) {
      val.count += book.count;
      judge = 0;
    }
  });

  if (judge) {
    this.basketItems.push({
      title: book.getBook().title,
      price: book.getBook().price,
      count: book.count
    });
  }

};

Basket.prototype.countBooks = function(basketItems) {
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


Basket.prototype.getDiscountCount = function(booksLength) {
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


Basket.prototype.getDiscountPrice = function(booksLength) {
  var decreaseArray = [3, 5];
  var addArray = [4, 4];
  var beforePrice = 0;
  var presentPrice = 0;
  var calculate = new Calculate();
  var count = this.getDiscountCount(booksLength);

  decreaseArray.forEach(function(val) {
    beforePrice += calculate.getPrice(val);
  });
  addArray.forEach(function(val) {
    presentPrice += calculate.getPrice(val);
  });

  return (beforePrice - presentPrice) * count;
};


Basket.prototype.getMinPrice = function(basketItems) {
  var price = 0;
  var calculate = new Calculate();
  var booksLength = this.countBooks(basketItems);

  booksLength.forEach(function(length) {
    price += calculate.getPrice(length);
  });

  price = price - this.getDiscountPrice(booksLength);

  return parseFloat(price.toFixed(2));
};

module.exports = Basket;
