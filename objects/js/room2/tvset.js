function Tvset() {
  this.name = "Телевизор";
  this.model = "Samsung";
  this.turnOn = function() {
    alert("Телевизор включен");
  };
}

const tvset = new Tvset();

export { tvset };
