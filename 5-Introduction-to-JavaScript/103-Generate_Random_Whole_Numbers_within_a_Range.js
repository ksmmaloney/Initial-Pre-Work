//  Instead of specifying between 0 and 19, you can specify a range of any two numbers you want by first defining both your lower number (min) and the higher number you want to use (max). randomRange will display a random number that fits within your range. 

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

console.log(myRandom = randomRange(5, 15));
