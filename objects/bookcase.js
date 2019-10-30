import { room } from "./room.js";

export let bookcase = { name: "Книжный шкаф" };
bookcase.color = "brown";
bookcase.book = "The Hobbit";

bookcase.openBookcase = function() {
  alert("Книжный шкаф открыт");
};

room.bookcase = bookcase;
console.log(room.bookcase);
