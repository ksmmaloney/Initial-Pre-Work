/*  With the "rest" operator, you can have functions that can take a variable number of arguments. Instead of being limited to a certain number of arguments there can be any number of arguments put into a parameter.

The rest parameter places user supplied arguments into an array and stores them. These arguments can be accessed later from inside the function. Note that the rest parameter will only work if you place it as the last parameter in the function.

*/ const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4)); // 6
