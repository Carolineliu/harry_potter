var BookInfo=require("./BookInfo");

function BasketItem(bookInfo,count) {
  this.bookInfo=bookInfo;
  this.count=count;
}

module.exports = BasketItem;
