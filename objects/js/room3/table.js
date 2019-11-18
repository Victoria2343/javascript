import { pc } from "./pc.js";
import { copybook } from "./copybook.js";
import { pencil } from "./pencil.js";
import { flowerpot1, flowerpot2 } from "./flowerpots.js";

function Table() {
  this.name = "Стол";
  this.color = "brown";
  this.copybook = copybook;
  this.pencil = pencil;
  this.pc = pc;
  this.flowerpot1 = flowerpot1;
  this.flowerpot2 = flowerpot2;
}

export { Table };
