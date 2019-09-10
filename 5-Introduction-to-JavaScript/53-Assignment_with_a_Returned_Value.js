/* If you have a function that uses a return value, you can take that return value and assign it to a variable.

You can assign the output of a function to a variable, just like any normal data.
*/


// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
