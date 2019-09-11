// If you need to test more than one thing at a time, you can use the "logical and operator" which looks like " && ". It returns true only if the values on the left and right are both true.

function testLogicalAnd(val) {
  // Only change code below this line

  if (val<=50 && val>=25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
console.log(testLogicalAnd(30));
