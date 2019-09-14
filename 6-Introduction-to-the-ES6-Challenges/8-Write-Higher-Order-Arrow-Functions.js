/* I had to get help from the hint on this one and in the process learned some new topics about higher order arrow functions, such as filter and map.

MDN "The filter() method creates a new array with all elements that pass the test implemented by the provided function." The filter was used to separate the positive integers from the decimals and the negative decimals in the array, and create the positive integers in a new array.

MDN "The map() method creates a new array with the results of calling a provided function on every element in the calling array." Map was used to take the new array of positive integers and square them.

*/


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map(num => num * num)
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
