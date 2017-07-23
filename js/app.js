var drinks = ["soju", "beer", "whisky"];

var soldier = {
  name: "Nicolas",
  age: 57,
  korean: false,
  drink: drinks[2],
  sayHi: function(name) {
    console.log("Hello" + name);
  }
};

var age = prompt("How old are you?");

if (age > 18) {
  console.log("drink!");
} else {
  console.log("GTFO!!!");
}

//
// function multiply(one, two) {
//   return one * two;
// }
//
// function divide(one, two) {
//   return one / two;
// }
//
// function sum(one, two) {
//   return one + two;
// }
//
// function substract(one, two) {
//   return one - two;
// }
