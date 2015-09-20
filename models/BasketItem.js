var Book = require("./Book.js");

function BasketItem(book, count) {
  this.count = count;
  this._book = book;
}

BasketItem.prototype.getBook = function() {
  return this._book;
};

module.exports = BasketItem;
