import { room } from "./room.js";

export let sofa = { name: "Диван" };
sofa.color = "beige";

room.mySofa = sofa;
console.log(room.mySofa);
