import { Table } from "./table.js";
import { Sofa } from "./sofa.js";
import { Tvset } from "./tvset.js";
import { Wardrobe } from "./wardrobe.js";
import { Bookcase } from "./bookcase.js";

function Room(name) {
  this.name = name;
  this.myTable = new Table();
  this.myTable2 = new Table();
  this.mySofa = new Sofa("Диван", "beige");
  this.tvset = new Tvset("Телевизор", "Samsung");
  this.myWardrobe = new Wardrobe("Шкаф для одежды", "brown");
  this.bookcase = new Bookcase("brown", "Книжный шкаф", "The Hobbit");
}

// const room = new Room();

// room.myTable.color = "brown";
// room.myTable2.color = "white";

// export { room };
export { Room };
