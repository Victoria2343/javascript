function Bookcase(myColor, name, book) {
  // myColor.color = "brown";
  this.name = name;
  this.color = myColor;
  this.book = book;
  this.openBookcase = function() {
    alert("Книжный шкаф открыт");
  };

  this.showInfo = function() {
    window.console.log(
      `Книжный шкаф - color: ${this.color}; book: ${this.book}`
    );
  };
}

// const obj = { color: "blue" };
// console.log(`current color: ${obj.color}`);

// obj.color = "black";
// console.log(`current color: ${obj.color}`);

// const bookcase = new Bookcase(obj);
// console.log(`current color: ${obj.color}`);

// obj.color = "yellow";
// console.log(`current color: ${obj.color}`);

export { Bookcase };
