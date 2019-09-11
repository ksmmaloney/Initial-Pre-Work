// The greater than operator ( > ) compares two numbers. If the number on the left is greater, it returns true. False, if not. This one will also convert data types if they're not equal.

function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(100))
