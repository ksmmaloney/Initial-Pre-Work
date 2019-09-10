/*  The equality operator " -- " compares two values and returns "true" if they're equivalent or "false" if they're not. (It's different from the assignment =)

JavaScript can compare two different data types, like numbers and strings, but they first have to be converted to one type--called "type coercion." (Don't forget the double ==)!
*/

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(12);
