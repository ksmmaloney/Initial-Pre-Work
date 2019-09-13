/*   This one was a lot to work out. Here's what I learned: You need a nested loop in order to get to the numbers inside the inner arrays. Those are the numbers that get multiplied together (1*2*3 in the first test listed in the left panel).

The first "for" goes through the main array. It loops through each item in the array (there are three, and each of those items is also an array):
for (var i = 0; i < arr.length; i++)

".length" figures out the length of the array, in this case it is 3 (i.e [1,2], [3,4], [5,6,7] ).

Then the second "for" goes into the inside arrays. The inner loops checks the .length or arr[i], because arr[i] itself is an array.
for(var j = 0; j < arr[i].length; j++){

The running product multiplies the numbers found in the inner arrays.  The second test that the challenge asks you to try works out to be 1*2*3*4*5*6*7 = 5040.

*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++)    {
    for (var j=0 ; j < arr[i].length; j++)   {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
