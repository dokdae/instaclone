$(document).ready(function() {
var $heart = $(".heart"),
  $ellipsis = $(".fa-ellipsis-h"),
  $overlay = $(".overlay"),
  $close = $(".fa-times"),
  $cancel = $(".link--cancel");

$ellipsis.click(function() {
  $overlay.fadeIn(100);
});
$close.click(function() {
  $overlay.fadeOut(100);
});
$cancel.click(function() {
  $overlay.fadeOut(100);
});


$heart.click(function() {
  $(this).toggleClass("fa-heart-o fa-heart heart-pumping");
});


// if ($(this).hasClass("heart-pumping")) {
//   $(this).removeClass("heart-pumping");
// } else {
//   $(this).addClass("heart-pumping");
// }
});
});

// $(document).ready(function() {
//   var $heart = $(".heart");
//   $heart.click(function() {
//     console.log("I got clicked!!")
//   });
// });

// var drinks = ["soju", "beer", "whisky"];
//
// var soldier = {
//   name: "Nicolas",
//   age: 57,
//   korean: false,
//   drink: drinks[2],
//   sayHi: function(name) {
//     console.log("Hello" + name);
//   }
// };
//
// var age = prompt("How old are you?");
//
// if (age < 18) {
//   console.log("GTFO!!!");
// } else if (age > 18 && age < 50) {
//   console.log("You're a father");
// } else if (age > 50 && age < 80) {
//   console.log("Hello grandpa!");
// } else {
//   console.log("U r dead 2 me")
// }

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
