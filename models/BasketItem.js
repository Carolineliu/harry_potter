var Book = require("./Book.js");

function BasketItem(book, count) {
  this.count = count;
  this.getBook = function() {
    return book;
  };

}

module.exports = BasketItem;
