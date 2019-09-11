/*  THE FOLLOWING IS WHAT SHOULD HAVE BEEN THE TEXT FOR LESSON 70

When using "if, else if" statements, the order is important. If the order is wrong, you can end up with incorrect outputs. The fuction gets executed from top to bottom. Pay attention to the statement that comes first.
*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
console.log(orderMyLogic(11));
