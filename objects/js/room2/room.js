import { table } from "./table.js";
import { sofa } from "./sofa.js";
import { tvset } from "./tvset.js";
import { wardrobe } from "./wardrobe.js";
import { bookcase } from "./bookcase.js";

function Room() {
  this.name = "Моя комната";
  this.myTable = table;
  this.mySofa = sofa;
  this.tvset = tvset;
  this.myWardrobe = wardrobe;
  this.bookcase = bookcase;
}

const room = new Room();
export { room };
