var BookInfo = require("../models/BookInfo.js");
var Basket = require("../models/Basket.js");
var BasketItem = require("../models/BasketItem.js");

describe("Basket", function() {
  describe("function", function() {
    var basketItems;

    beforeEach(function() {
      basketItems = [{
        bookInfo: {
          title: "harry-potter-I",
          price: 8
        },
        count: 4
      }, {
        bookInfo: {
          title: "harry-potter-II",
          price: 8
        },
        count: 3
      }, {
        bookInfo: {
          title: "harry-potter-III",
          price: 8
        },
        count: 5
      }, {
        bookInfo: {
          title: "harry-potter-IV",
          price: 8
        },
        count: 7
      }, {
        bookInfo: {
          title: "harry-potter-V",
          price: 8
        },
        count: 5
      }];
    });

    it("should can add book in basket", function() {
      var bookInfo = new BookInfo("harry-potter-I");
      var newBasketItem = new BasketItem(bookInfo, 5);
      var basket = new Basket();
      basket.addBasketItem(newBasketItem);

      expect(basket.basketItems[0].bookInfo.title).toBe("harry-potter-I");
      expect(basket.basketItems[0].count).toBe(5);
    });

    it("should can get different books length", function() {
      var basket = new Basket();
      var length = basket.calculateDifferentBooksLength(basketItems);

      expect(length).toEqual([5, 5, 5, 4, 3, 1, 1, 0]);

    });

    it("should can get more discount count", function() {
      var booksLength = [3, 3, 2, 4, 3, 2, 5, 5, 3, 4, 1, 4];
      var basket = new Basket();
      var count = basket.getMoreDiscountCount(booksLength);

      expect(count).toBe(2);
    });

    it("should can get min price", function() {
      var basket = new Basket();
      var price = basket.getMinPrice(basketItems);

      expect(price).toBe(152.80);
    });

  });
});
