/*  The "strict inequality operator"  !==  adds an extra " = " just like the strict equality operator. But it's the logical opposite. It means "Strictly Not Equal" and returns false. It also will not convert data types if they're not the same.
3 !== 3 // false
3 !== '3' // true
4 !== 3 // true
*/

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val!==17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
