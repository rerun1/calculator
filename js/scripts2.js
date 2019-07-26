// begin business logic

var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var multThreeNumbers = function(number1, number2, number3) {
  return number1 * number2 * number3;
}
var divide = function(number1, number2) {
  return number1 / number2;
};
var remainder = function(number1, number2) {
  return number1 % number2;
};


var bodyMassIndex = function(weight,height) {
  return ((weight / (height*height))*703).toFixed(1);
};

// 1 inch = .0254 meters
// 1 lb = 0.45359237 kg
// so 0.45359237 / .0254 ^2 = 703.0696 or just 703.
// and so
// Imperial BMI = 703 x weight (lbs) / [height (in)^2].

// included above calculation cuz I'm dumb, it will remind me why 703

var celsius = function(fahrenheit) {
  return (fahrenheit - 32)*.556;
};
var gallonsToLiters = function(gallons) {
  return gallons * 3.78541;
};
// Celsius and gallonsToLiters functions not called below

// end business logic

$(document).ready(function() {
  $("form#add").submit(function(event){
    event.preventDefault();
    var userNumber1 = parseInt($("#add1").val());
    var userNumber2 = parseInt($("#add2").val());
    var result = add(userNumber1, userNumber2);
    $("#addOutput").text(result);
  });
  $("form#subtract").submit(function(event){
    event.preventDefault();
    var userNumber3 = parseInt($("#subtract1").val());
    var userNumber4 = parseInt($("#subtract2").val());
    var result = subtract(userNumber3, userNumber4);
    $("#subtractOutput").text(result);
  });
  $("form#multiply").submit(function(event){
    event.preventDefault();
    var userNumber5 = parseInt($("#multiply1").val());
    var userNumber6 = parseInt($("#multiply2").val());
    var result = multiply(userNumber5, userNumber6);
    $("#multiplyOutput").text(result);
  });
  $("form#divide").submit(function(event){
    event.preventDefault();
    var userNumber7 = parseInt($("#divide1").val());
    var userNumber8 = parseInt($("#divide2").val());
    var result = divide(userNumber7, userNumber8);
    $("#divideOutput").text(result);
  });
});
