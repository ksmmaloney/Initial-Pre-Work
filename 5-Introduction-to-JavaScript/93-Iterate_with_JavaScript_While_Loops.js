/* A loop is used to keep running a code block multiple times. The "while" loop runs while a certain condition is true. It stops once the condition is no longer true.

In this challenge, the ++ operator keeps incrementing the variable "i" by one until the arrayy reaches 4. Each new digit gets pushed to the end of the array.

*/


// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while(i<5) {
  myArray.push(i);
  i++;


}
