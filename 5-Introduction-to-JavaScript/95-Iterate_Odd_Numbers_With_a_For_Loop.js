/*  You can iterate more than one at a time with a For loop. Just change the final-expression to the operation you need.
 In this case we use the "plus equals operator"  +=  in the final-expression, instead of ++. The += operator adds a designated number to the variable and assigns the value in one step.  

*/

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 10; i += 2)  {
 myArray.push(i);
}
   console.log(myArray)
