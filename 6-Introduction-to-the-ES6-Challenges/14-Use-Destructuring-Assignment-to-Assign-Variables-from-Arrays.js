/* Destructuring an array lets you choose which elements to assign to variables. The spread operator produces a comma-separated list that does not let you choose which elements to assign to variables.

(I also learned I've been calling it destructing and destruct, oops. It's destructuring!)
*/


let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
   [a, b] = [6, 8] ;
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
