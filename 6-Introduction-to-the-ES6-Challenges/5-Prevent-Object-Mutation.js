/* To protect your data from being changed, you can use Object.freeze. Once it's frozen you won't be able to make any changes to it.

Place "Object.freeze(name of the object);" directly after you create the object.
*/

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

    Object.freeze(MATH_CONSTANTS);


  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
