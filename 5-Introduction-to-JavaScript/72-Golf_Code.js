// I learned that even if a function is declared with parameters ("par" and "strokes" in this case) you don't necessarily have to use both parameters in your code. This one only uses "strokes" in the code. I also learned, again, to be careful with keeping track of brackets. And spaces.

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par-2){
    return "Eagle";
  } else if (strokes == par -1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par +1) {
    return "Bogey";
  } else if (strokes == par +2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }


  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 5));
