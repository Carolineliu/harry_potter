var Book = require("../models/Book.js");

describe("Book", function() {
  describe("constuctor", function() {

    it("should get correct title and price", function() {
      var book = new Book("harry-potter-I");

      expect(book.title).toBe("harry-potter-I");
      expect(book.price).toBe(8);

    });
  });
});
