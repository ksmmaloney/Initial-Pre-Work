/*  To review:
The equality operator ( = ) will perform a type conversion if the values being compared are not the same type. Then, it will evaluate the values.

The strict equality operator ( = ) will compare the two without converting the types if they're different.

If you need to find out what type a variable or a value is, you can use the "typeof" operator.
typeof 3 // returns 'number'
typeof '3' //returns 'string'
*/

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
