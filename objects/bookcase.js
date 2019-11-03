export let bookcase = { name: "Книжный шкаф" };
bookcase.color = "brown";
bookcase.book = "The Hobbit";

bookcase.openBookcase = function() {
  alert("Книжный шкаф открыт");
};

bookcase.showInfo = function() {
  console.log(
    "Книжный шкаф - " + "color:" + this.color + "; book:" + this.book
  );
};
