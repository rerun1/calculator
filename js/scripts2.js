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
  $("form#calculator").submit(function(event){
    event.preventDefault();
    var userNumber1 = parseInt($("#input1").val());
    var userNumber2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var userOperator;
    var result;

    console.log(operator);
    $("p#error").empty();
    $("p#output").empty();
    $("p#result").empty();
    $("span#outputParagraph").show();
    $("span#resultParagraph").show();

    if (operator === "add") {
      $("div#radio").removeClass("radio");
      result = add(userNumber1,userNumber2);
      userOperator = " + ";
    } else if (operator === "subtract"){
      $("div#radio").removeClass("radio");
      result = subtract(userNumber1,userNumber2);
      userOperator = " - ";
    } else if (operator === "multiply") {
      $("div#radio").removeClass("radio");
      result = multiply(userNumber1,userNumber2);
      userOperator = " x ";
    } else if (operator === "divide") {
      $("div#radio").removeClass("radio");
      result = divide(userNumber1,userNumber2);
      userOperator = " divided by ";
    } else {
      $("div#radio").addClass("radio")
      $("p#error").empty().text("please select a function above");
      $("span#outputParagraph").hide();
      $("span#resultParagraph").hide();
    }

    $("p#output").text("Scamper says " + userNumber1 + userOperator + userNumber2 + " = ");
    $("p#result").text(result)
  });

});
