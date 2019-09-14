//  When you use const to declare a variable, it prevents you from reassigning that variable keyword . It does not prevent you from changing the contents of objects, arrays, and functions.


const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
