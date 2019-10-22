let room = {
  name: "Моя комната"
};

// console.log(room);

// room.table = { name: "Стол" };
// room.table.color = "brown";
// room.table.pencil = { name: "Карандаш" };
// room.table.pc = { name: "Мой компьютер" };
// room.table.copybook = { name: "Тетрадь" };

let table = { name: "Стол" };
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

// room.wardrobe = { name: "Шкаф для одежды" };
// room.wardrobe.color = "brown";

let wardrobe = { name: "Шкаф для одежды" };
wardrobe.color = "brown";

wardrobe.openWardrobe = function() {
  alert("Шкаф открыт");
};

room.myWardrobe = wardrobe;
console.log(room.myWardrobe);

// room.sofa = { name: "Диван" };
// room.sofa.color = "beige";

let sofa = { name: "Диван" };
sofa.color = "beige";

room.mySofa = sofa;
console.log(room.mySofa);

// room.tvset = { name: "Телевизор" };
// room.tvset.model = "Samsung";

let tvset = { name: "Телевизор" };
tvset.model = "Samsung";

tvset.turnOn = function() {
  alert("Телевизор включен");
};

room.tvset = tvset;
console.log(room.tvset);

// room.bookcase = { name: "Книжный шкаф" };
// room.bookcase.color = "brown";
// room.bookcase.book = "The Hobbit";

let bookcase = { name: "Книжный шкаф" };
bookcase.color = "brown";
bookcase.book = "The Hobbit";

bookcase.openBookcase = function() {
  alert("Книжный шкаф открыт");
};

room.bookcase = bookcase;
console.log(room.bookcase);

// room.flowerpot1 = { name: "Ficus" };
// room.flowerpot2 = { name: "Money Tree" };

let flowerpot1 = { name: "Ficus" };
table.flowerpot1 = flowerpot1;
room.table.flowerpot1 = flowerpot1;

let flowerpot2 = { name: "Money Tree" };
table.flowerpot2 = flowerpot2;
room.table.flowerpot2 = flowerpot2;

console.log(room.table.flowerpot1);
console.log(room.table.flowerpot2);

// alert(room);
