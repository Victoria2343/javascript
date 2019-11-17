import { pc } from "./pc.js";
import { copybook } from "./copybook.js";
import { pencil } from "./pencil.js";
import { flowerpot1, flowerpot2 } from "./flowerpots.js";

let table = { name: "Стол" };
table.color = "brown";

table.copybook = copybook;
table.pencil = pencil;
table.pc = pc;
table.flowerpot1 = flowerpot1;
table.flowerpot2 = flowerpot2;

export { table };
