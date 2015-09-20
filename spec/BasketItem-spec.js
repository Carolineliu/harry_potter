var BasketItem = require("../models/BasketItem.js");
var Book = require("../models/Book.js");

describe("BasketItem", function() {
  describe("constuctor", function() {
    var book;

    beforeEach(function() {
      book = new Book("harry-potter-I");
    });


    it("should get correct book and count", function() {
      var basketItem = new BasketItem(book, 2);

      expect(basketItem._book.title).toBe("harry-potter-I");
      expect(basketItem._book.price).toBe(8);
      expect(basketItem.count).toBe(2);

    });

  });

  describe("function", function() {
    var book;

    beforeEach(function() {
      book = new Book("harry-potter-I");
    });

    it("should get correct book ", function() {
      var basketItem = new BasketItem(book, 2);

      expect(basketItem.getBook().title).toBe("harry-potter-I");
      expect(basketItem.getBook().price).toBe(8);

    });
  });
});
