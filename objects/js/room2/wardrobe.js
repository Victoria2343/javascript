function Wardrobe() {
  this.name = "Шкаф для одежды";
  this.color = "brown";
  this.openWardrobe = function() {
    alert("Шкаф открыт");
  };
}

const wardrobe = new Wardrobe();

export { wardrobe };
