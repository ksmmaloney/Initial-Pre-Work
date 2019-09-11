/* The strict equality "===" operator is similar to the equality operator in that it tries to see if the values are equal. The difference is that the strict equality operator does not convert the types if they are not the same type. If they have different types, the returned value is false. (Seems to act as a way of weeding out uncommon types before going any further.) */

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);
