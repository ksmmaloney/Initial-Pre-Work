/*  The "for" loop is the most common kind of loop. It runs for a specific number of times.

It uses three optional expressions:
initialization - it runs once before the loop starts; used to define and setup the loop variable.
condition - gets evaluated at the start of every iteration as long as it's true. (If the condition is false at the start, the loop stops)
final-expression - runs at the end of each loop; used for incrementing or decrementing the counter

*/


// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 6; i++)  {
    myArray.push(i);
}

console.log(ourArray)
