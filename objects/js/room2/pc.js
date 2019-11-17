function Pc() {
  this.name = "Мой компьютер";
  this.turnOn = function() {
    alert("компьютер включен!!");
  };
}

const pc = new Pc();

export { pc };
