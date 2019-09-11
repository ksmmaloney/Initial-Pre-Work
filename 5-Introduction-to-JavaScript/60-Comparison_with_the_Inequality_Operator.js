//  The inequality operator " !- " --meaning not equal--  is the opposite of the equality operator. It also will do the extra step of converting data types if the values it's comparing aren't equal.


// Setup
function testNotEqual(val) {
  if (val!= 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
