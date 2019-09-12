/*You can easily change the properties of an object after you've created the object. You can use either dot notation or bracket notation.

Similar to setting a variable, you write the object name, then the property name and assign it a new value. Between the object name and the property name, you either insert a dot or a bracket (then you continue with quotes and a closing bracket).


*/

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog["name"] = "Happy Coder";
