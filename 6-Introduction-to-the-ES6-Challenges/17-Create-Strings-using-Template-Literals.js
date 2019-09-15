  /* "Template literal" is a type of string that allows you to create multi-line strings and to use string interpolation features. The ${variable} is a placeholder that allows you to skip the process of concatenation.

  In this case the variable "item" gets placed inside the template string of `<li class="text-warning">no-var</li>` (item replaces "no-var"). When you wrap item with ${ }, it becomes a placeholder for the three phrases in the failure property (no-var, var-on-top, and linebreak).
 */

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
