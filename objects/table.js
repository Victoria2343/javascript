import { room } from "./room.js";
import { pc } from "./pc.js";
import { copybook } from "./copybook.js";
import { pencil } from "./pencil.js";

let table = { name: "Стол" };
table.color = "brown";

table.copybook = copybook;
table.pencil = pencil;
table.pc = pc;

room.myTable = table;

room.myTable.color = "white";
table.color = "blue";

export { table };
