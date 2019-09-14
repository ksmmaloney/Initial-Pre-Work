/* You can use it to take a value directly from an object and neatly assign it to a variable. Not sure I can explain the deconstruction process without diagrams, but my biggest takeaway was to be careful about what you're trying to deconstruct!

At first I was trying to destruct the global variable of "AVG_TEMPERATURES" when I should have been destructing the parameter "avgTemperatures". The example fCC used did not involve dealing with a function, but the challenge did involve a function. I was forgetting to check out the function!

*/

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
 // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
