
var scamperSays = function(name, favoriteDog) {
  return "Well " + name + ", Scamper doesn't like " + favoriteDog + ", but that's okay because this isn't about you or your dog! Scamper really wants to do math.";
};

var userName = prompt("What is your name?");

var userFavoriteDog = prompt("What breed of dog is your favorite?");

alert (scamperSays(userName, userFavoriteDog));

var bodyMassIndex = function(weight, height){
  var convertWeight = weight * .45;
  var convertHeight = height * .025;
  var squareHeight = convertHeight * convertHeight;
  var bmi = convertWeight / squareHeight;
  return bmi.toFixed(1);
};

var userWeight = parseInt(prompt(userName + ", Scamper is so rude, he wants to know how much you weigh in pounds. Approximately, no fractions please, Scamper doesn't do fractions..."));

var userHeight = parseInt(prompt("and how tall are you in inches, " + userName +  "? The concept of feet doesn't work for dogs for several reasons."));

alert(userName + ", your bmi is " + bodyMassIndex(userWeight, userHeight));

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

var userNumber1 = parseInt(prompt(userName + " Scamper would like you to enter a positive whole number."));

var userNumber2 = parseInt(prompt("Thanks! " + userName + ", Scamper says please enter another a positive whole number."));

var userNumber3 = parseInt(prompt("You've been so patient! Finally, " + userName + ", please pick a third positive whole number."));

alert(userName + " Scamper is quite sure that if you add "  + userNumber1 + " and " + userNumber2 + " your answer will be " + add(userNumber1, userNumber2) + ".");

alert(userName + " Scamper says subtracting " + userNumber2 + " from " + userNumber1 + " is " + subtract(userNumber1, userNumber2) + ".");

alert("AND " + userName + ", Scamper says multiplying " + userNumber1 + " by " + userNumber2 + " gives you " + multiply(userNumber1, userNumber2) + " and multiplying all three of your numbers will equal " + multThreeNumbers(userNumber1, userNumber2, userNumber3) + "!");

alert("Scamper says dividing " + userNumber1 + " by " + userNumber2 + " is " + divide(userNumber1, userNumber2) + " and the remainder will be " + remainder(userNumber1, userNumber2) + ".");
