function Bookcase() {
  this.name = "Книжный шкаф";
  this.color = "brown";
  this.book = "The Hobbit";
  this.openBookcase = function() {
    alert("Книжный шкаф открыт");
  };

  this.showInfo = function() {
    console.log(`Книжный шкаф - color: ${this.color}; book: ${this.book}`);
  };
}

const bookcase = new Bookcase();

export { bookcase };
