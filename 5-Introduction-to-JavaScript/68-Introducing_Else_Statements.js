//  There can be two blocks of code that get executed when comparing values. When an IF statement is true, one block of code gets executed. When the IF statement is false, an "else" block of code gets executed. 


function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    return "Bigger than 5";
  } else {
    return "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(testElse(5));
