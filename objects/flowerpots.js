import { room } from "./room.js";
import { table } from "./table.js";

export let flowerpot1 = { name: "Ficus" };
table.flowerpot1 = flowerpot1;
room.myTable.flowerpot1 = flowerpot1;

export let flowerpot2 = { name: "Money Tree" };
table.flowerpot2 = flowerpot2;
room.myTable.flowerpot2 = flowerpot2;

console.log(room.myTable.flowerpot1);
console.log(room.myTable.flowerpot2);
