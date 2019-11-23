import { Pc } from "./pc.js";
import { Copybook } from "./copybook.js";
import { Pencil } from "./pencil.js";
import { Flowerpot1, Flowerpot2 } from "./flowerpots.js";

function Table() {
  this.name = "Стол";
  this.color = "brown";
  this.copybook = new Copybook("Тетрадь");
  this.pencil = new Pencil("Карандаш");
  this.pc = new Pc("Мой компьютер");
  this.flowerpot1 = new Flowerpot1("Ficus");
  this.flowerpot2 = new Flowerpot2("Money Tree");
}

export { Table };
