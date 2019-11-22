import { Pc } from "./pc.js";
import { Copybook } from "./copybook.js";
import { Pencil } from "./pencil.js";
import { Flowerpot1, Flowerpot2 } from "./flowerpots.js";

function Table() {
  this.name = "Стол";
  this.color = "brown";
  this.copybook = new Copybook();
  this.pencil = new Pencil();
  this.pc = new Pc();
  this.flowerpot1 = new Flowerpot1();
  this.flowerpot2 = new Flowerpot2();
}

export { Table };
