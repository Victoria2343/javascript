import { room } from "./room.js";

export let tvset = { name: "Телевизор" };
tvset.model = "Samsung";

tvset.turnOn = function() {
  alert("Телевизор включен");
};

room.tvset = tvset;
console.log(room.tvset);
