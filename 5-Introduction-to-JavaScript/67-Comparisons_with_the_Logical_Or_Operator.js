/*  Well, I learned what a "pipe" symbol is.

The "logic OR operator" returns true if either one of the operands is true. False, otherwise.

The second way to write the logic in this challenge, using the "||", symbols is much clearer than the first.
*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val>20 || val<10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
console.log(testLogicalOr(21));
