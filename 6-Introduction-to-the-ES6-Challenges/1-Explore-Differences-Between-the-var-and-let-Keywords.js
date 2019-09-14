// In ES6, "let" can be used in place of "var" when declaring variables.  Let can only be used once per variable name. Otherwise, trying to use it to create another variable with the same name will cause an error. The method is meant to prevent overwriting variable declarations. Also, "use strict" enables Strict Mode, used for catching mistakes in code.



let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
