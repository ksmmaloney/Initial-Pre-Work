// The "less than" operator uses " < ". It compares two numbers. If the number on the left is less than the one on the right, it returns true. False, otherwise. It also converts data types if they're not equal.

function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
console.log(testLessThan(99));
