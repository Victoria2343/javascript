import { room } from "./room.js";

export let wardrobe = { name: "Шкаф для одежды" };
wardrobe.color = "brown";

wardrobe.openWardrobe = function() {
  alert("Шкаф открыт");
};

room.myWardrobe = wardrobe;
console.log(room.myWardrobe);
