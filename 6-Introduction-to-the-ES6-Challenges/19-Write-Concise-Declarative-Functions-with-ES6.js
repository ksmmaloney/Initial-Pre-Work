/* If you are putting a function inside an object, you can make your code simpler and shorter by revising the way you would normally define the function. You can remove the keyword "function" and you can remove the colon that comes right before the keyword.
*/

// change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(48);
console.log(bicycle.gear);
