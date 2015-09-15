var BookInfo = require("../models/BookInfo.js");

describe("BookInfo", function() {
  describe("constuctor", function() {
    it("should get correct title and price", function() {
      var bookInfo = new BookInfo("harry-potter-I");

      expect(bookInfo.title).toBe("harry-potter-I");
      expect(bookInfo.price).toBe(8);
      
    });
  });
});
