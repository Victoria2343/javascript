import { table } from "./table.js";
import { sofa } from "./sofa.js";
import { tvset } from "./tvset.js";
import { wardrobe } from "./wardrobe.js";
import { bookcase } from "./bookcase.js";

let room = {
  name: "Моя комната"
};

room.myTable = table;
room.mySofa = sofa;
room.tvset = tvset;
room.myWardrobe = wardrobe;
room.bookcase = bookcase;

export { room };
