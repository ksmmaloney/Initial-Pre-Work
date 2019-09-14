//  You can use "default parameters" in functions whenever an argument isn't specified. You set these default parameters when declaring the function by adding " = " to the parameter name, followed by the value you want to use.


const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
