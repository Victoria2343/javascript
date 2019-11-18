import { Table } from "./table.js";
import { sofa } from "./sofa.js";
import { tvset } from "./tvset.js";
import { wardrobe } from "./wardrobe.js";
import { bookcase } from "./bookcase.js";

function Room() {
  this.name = "Моя комната";
  this.myTable = new Table();
  this.myTable2 = new Table();
  this.mySofa = sofa;
  this.tvset = tvset;
  this.myWardrobe = wardrobe;
  this.bookcase = bookcase;
}

const room = new Room();

room.myTable.color = "brown";
room.myTable2.color = "white";

export { room };
