function Wardrobe(name, myColor) {
  this.name = name;
  this.color = myColor;
  this.openWardrobe = function() {
    alert("Шкаф открыт");
  };
}

export { Wardrobe };
