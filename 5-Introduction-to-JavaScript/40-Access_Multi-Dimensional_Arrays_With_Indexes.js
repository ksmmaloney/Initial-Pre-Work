// With arrays, you work from the outside to the inside. To start, each set of brackets is one unit, with the first set of brackets on the far left having a position of 0. Even if a set of brackets(a) has a set of brackets inside of it (b), bracket set (a) still gets considered first before (b).


// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];
