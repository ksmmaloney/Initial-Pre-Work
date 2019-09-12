//  You can use bracket notation to access a property that's stored as a variable's value. In this case, we know the player's number is 16, but now we're looking for his name.


// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
console.log(player);
