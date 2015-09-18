var Book = require("../models/Book.js");
var Basket = require("../models/Basket.js");
var BasketItem = require("../models/BasketItem.js");

describe("Basket", function() {
  describe("function", function() {

    var basketItems;
    var basketItems1;
    var basketItems2;
    var basketItemS3;

    beforeEach(function() {

      basketItems = [{

        title: "harry-potter-I",
        price: 8,
        count: 4
      }, {
        title: "harry-potter-II",
        price: 8,
        count: 3
      }, {

        title: "harry-potter-III",
        price: 8,
        count: 5
      }, {

        title: "harry-potter-IV",
        price: 8,
        count: 7
      }, {

        title: "harry-potter-V",
        price: 8,
        count: 5
      }];


      basketItems1 = [{
        title: "harry-potter-I",
        price: 8,
        count: 4
      }];


      basketItems2 = [{
        title: "harry-potter-I",
        price: 8,
        count: 1
      }, {
        title: "harry-potter-II",
        price: 8,
        count: 3
      }];


      basketItems3 = [{
        title: "harry-potter-I",
        price: 8,
        count: 1
      }, {
        title: "harry-potter-II",
        price: 8,
        count: 3
      }, {
        title: "harry-potter-III",
        price: 8,
        count: 3
      }, {
        title: "harry-potter-IV",
        price: 8,
        count: 4
      }];

    });


    it("should can add book in basket", function() {
      var book = new Book("harry-potter-I");
      var newBasketItem = new BasketItem(book, 5);
      var basket = new Basket();
      basket.addBook(newBasketItem);
      var hah = basket.basketItems;

      expect(basket.basketItems[0].title).toBe("harry-potter-I");
      expect(basket.basketItems[0].count).toBe(5);

      var book1 = new Book("harry-potter-I");
      var newBasketItems = new BasketItem(book, 1);
      basket.addBook(newBasketItems);

      expect(basket.basketItems[0].title).toBe("harry-potter-I");
      expect(basket.basketItems[0].count).toBe(6);

    });


    it("should can get different books length", function() {
      var basket = new Basket();

      expect(basket.countBooks(basketItems)).toEqual([5, 5, 5, 4, 3, 1, 1, 0]);
      expect(basket.countBooks(basketItems1)).toEqual([1, 1, 1, 1, 0]);
      expect(basket.countBooks(basketItems2)).toEqual([2, 1, 1, 0]);
      expect(basket.countBooks(basketItems3)).toEqual([4, 3, 3, 1, 0]);

    });


    it("should can get more discount count", function() {
      var booksLength = [3, 3, 2, 4, 3, 2, 5, 5, 3, 4, 1, 4];
      var booksLength1 = [3, 4, 4, 2, 1];
      var basket = new Basket();

      expect(basket.getDiscountCount(booksLength)).toBe(2);
      expect(basket.getDiscountCount(booksLength1)).toBe(0);
    });


    it("should can get more discount price", function() {
      var booksLength = [3, 3, 2, 4, 3, 2, 5, 5, 3, 4, 1, 4];
      var booksLength1 = [3, 4, 4, 2, 1];
      var basket = new Basket();
      var discountPrice = basket.getDiscountPrice(booksLength).toFixed(2);

      expect(parseFloat(discountPrice)).toBe(0.80);
      expect(basket.getDiscountPrice(booksLength1)).toBe(0);

    });


    it("should can get min price", function() {
      var basket = new Basket();

      expect(basket.getMinPrice(basketItems)).toBe(152.80);
      expect(basket.getMinPrice(basketItems1)).toBe(32);
      expect(basket.getMinPrice(basketItems2)).toBe(31.2);
      expect(basket.getMinPrice(basketItems3)).toBe(76.8);
    });

  });
});
