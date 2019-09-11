//  The "greater than or equal to" operator is "">=".  If the number on the left is greater than or equal to the one on the right, it returns true. False, otherwise.

It will also convert data types.

function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(20));
