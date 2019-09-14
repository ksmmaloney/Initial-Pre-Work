/* The spread operator allows you to expand or "spread out" arrays and other expressions. Spread operators let you unpack elements in an array to single arguments. Unlike rest parameters, you are allowed to place a spread operator as the first argument.

You can use the spread operator to copy an array.

const arr = [1, 2, 3];
const arr2 = [...arr];

This copies arr into arr2.
*/



const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
