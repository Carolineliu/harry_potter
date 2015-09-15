var BasketItem = require("../models/BasketItem.js");
var BookInfo = require("../models/BookInfo.js");

describe("BasketItem", function() {
  describe("constuctor", function() {
    var bookInfo;

    beforeEach(function() {
      bookInfo=new BookInfo("harry-potter-I");
    });

    it("should get correct bookInfo and count", function() {
      var basketItem = new BasketItem(bookInfo,2);

      expect(basketItem.bookInfo.title).toBe("harry-potter-I");
      expect(basketItem.bookInfo.price).toBe(8);
      expect(basketItem.count).toBe(2);

    });

  });
});
