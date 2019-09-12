//  There's a cleaner, shorter way to return the result of a comparison than using an if/else block to compare variables. You can do it inside the return statement with a comparison operator and minimal code. 

function isLess(a, b) {
  // Fix this code
  return a<b;

  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
console.log(isLess(15, 10));
