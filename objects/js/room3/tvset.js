function Tvset(name, model) {
  this.name = name;
  this.model = model;
  this.turnOn = function() {
    alert("Телевизор включен");
  };
}

export { Tvset };
