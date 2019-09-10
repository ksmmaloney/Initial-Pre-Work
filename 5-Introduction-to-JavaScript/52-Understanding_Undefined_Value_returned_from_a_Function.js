//  A function does not always include a "return" statement. If you call a function that does not have a return statement, the code still gets processed but the returned value will be "undefined".

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
