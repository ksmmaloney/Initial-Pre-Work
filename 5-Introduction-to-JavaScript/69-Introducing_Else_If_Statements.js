// You can link together "if" statements with "else if" statements if you have more than two conditions.


function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
// Change this value to test
console.log(testElseIf(7));
