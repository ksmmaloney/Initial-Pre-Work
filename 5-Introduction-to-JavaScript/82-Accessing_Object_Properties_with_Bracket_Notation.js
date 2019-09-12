/* Bracket notation is used to access the properties of an object. If the property name contains a space, you nees to use bracket notation. But bracket notation is permissible with property names that don't have spaces.

Property names containing spaces must stay in quotes.

*/ Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
