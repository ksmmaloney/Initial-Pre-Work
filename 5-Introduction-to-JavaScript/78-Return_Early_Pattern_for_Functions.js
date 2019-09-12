/*  When the code gets to a return statement, the current function stops. You can use a "return early" pattern to stop running the code and quit early if certain conditions are met.

I was reminded in this one that if something is undefined, there is no output. I also learned that if you just put "return" without adding the word "undefined", it still works. So maybe this challenge meant for you to just use "return" by itself?
*/

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a<0 || b<0) {
  return undefined;

  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(2,8));
