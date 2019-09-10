//  Local and global variables can feasibly have the same name. When this happens, however, the local variable has priority over the global variable. The function will return the value that was placed on the variable inside the function.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
