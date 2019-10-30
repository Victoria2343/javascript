import { room } from "./room.js";

export let table = { name: "Стол" };
table.color = "brown";
table.pencil = { name: "Карандаш" };
table.pc = { name: "Мой компьютер" };

table.pc.turnOn = function() {
  alert("компьютер включен!!");
};

table.copybook = { name: "Тетрадь" };

room.myTable = table;

room.myTable.color = "white";
table.color = "blue";

console.log(table);
console.log(room.myTable);
