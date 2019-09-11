/*  The "less than or equal to" operator uses " <= ". If the left number is less than or equal to the right number, it returns true. Otherwise, it returns false. It will also convert data types if they're not equal.

*/

function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
console.log(testLessOrEqual(23));
