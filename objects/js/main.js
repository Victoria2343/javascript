import { Room } from "./room3/room.js";

const room = new Room("Моя комната");

room.myTable.color = "brown";
room.myTable2.color = "white";

window.myRoom = room;
console.log(room);
