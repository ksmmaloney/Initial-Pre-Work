//  When a variable is declared WITHIN a function, it is said to have a "local" scope. (The variable's function parameters also have local scope.) As a result, the variable is only visible within that function. Outside of the function, the variable is "not defined".

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
