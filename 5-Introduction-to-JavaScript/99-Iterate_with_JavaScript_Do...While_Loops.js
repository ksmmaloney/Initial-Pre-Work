/* The "do...while" loop is a variation on the "while" loop. The while loop only runs if a certain condition is true. But "do" tells the code to run one time before there is a check on the condition to see if it's true (and if the code should keep running).

You place the "while" (i < 5) after the operation that adds i to the array, so that the condition check will be performed after the code runs at least once. 

*/

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

do {
  myArray.push(i);
  i++;
} while (i < 5)

console.log(myArray);
console.log(i);
