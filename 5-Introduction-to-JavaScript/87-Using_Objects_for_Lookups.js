/* Instead of using a switch statement or if/else, you can use an object to find values, if you have "tabular data".
After converting the case statements into object properties you can make use of the variable result to let the phoneticLookup function return the correct value.

*/

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
 var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
  "charlie": "Chicago",
    "delta": "Denver",
      "echo": "Easy",
  "foxtrot":  "Frank"
  };
 result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("foxtrot"));
