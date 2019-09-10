/*  Boolean conditions can be only true or false. They appear in code inside a set of parentheses. Depending on their answer, the code in curly braces gets executed. Or not. They work together with IF statements. "IF" will tell Javascript to execute the code, depending on the Boolean conditions. A "true" condition will execute the code. A "false" condition will cause the code to not execute.
if (condition is true) {
statement is executed
}

*/


// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
if (wasThatTrue) {
    return "Yes, that was true";
}
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
